import styles from './Styles.module.scss';
import Image from 'next/image';

import status_check from '../../assets/status_check.png';
import caret_down from '../../assets/caret_down.png';
import { useContext, useState, useEffect } from 'react';
import Modal from './../Modal/Index';
import SelectInput from './../misc/SelectInput';
import VillageContext from '../../Context/villageContext';
import useVillage from '../../Context/villageContext';

import { Form, Formik } from 'formik';
// import { CustomSelectInput } from '../Forms/SelectInput';
import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import TextError from '../Forms/TextError';
import useAuthStore from '../../store/authStore';
// Prevent serverside redering on the FormikControl Component
const FormikControl = dynamic(() => import('../Forms/FormikControl'), {
  ssr: false,
});
// Prevent serverside redering on the CustomSelectInput Component
const CustomSelectInput = dynamic(
  () => import('../Forms/SelectInput').then((mod) => mod.CustomSelectInput),
  {
    ssr: false,
  }
);

const DashboardMain = () => {
  const { userProfile } = useAuthStore();
  // const { email, first_name, last_name, image } = userProfile;
  // const { email, first_name, last_name, image } = userProfile;

  const email = userProfile?.email
  const first_name = userProfile?.first_name;
  const last_name = userProfile?.last_name;
  const image = userProfile?.image;
  
  ////// Modal State
  const [showModal, setShowModal] = useState(false);

  ////// Add Village Function
  // Village State
  const [selectedVillages, setSelectedVillages] = useState([]);
  const { villages, removeVillage, addVillage } = useVillage();
  const [villageError, setVillageError] = useState(false);

  const handleChange = (e) => {
    let currentVillages = [];
    const selectedVillages = e.target.value;
    const selectedVillagesArray = currentVillages.push(selectedVillages);

    setSelectedVillages((previousVillages) =>
      previousVillages.concat(currentVillages)
    );
  };

  const addVillageHandler = (village) => {
    setVillageError(false);
    const villageIsInVillages = villages.find((vil) => vil === village.value);
    !villageIsInVillages ? addVillage(village.value) : setVillageError(true);
  };

  /////// Add Contributor Function

  const initialValues = {
    first_name: '',
    last_name: '',
    phone_number: '',
    village: '',
  };

  // Contributor state
  const [contributor, setContributor] = useState({ initialValues });

  const contributeChange = (e) => {
    const { name, value } = e.target;
    setContributor({
      ...contributor,
      [name]: value,
    });
  };

  const contributeSubmit = (e) => {
    e.preventDefault();
    // console.log(contributor);
    setContributor(initialValues);
    setShowModal(false);
  };

  //Initialize select options
  const stateOptions = [
    {
      label: 'Rivers',
      value: 'Rivers State',
    },
    {
      label: 'Lagos',
      value: 'Lagos State',
    },
    {
      label: 'Ogun',
      value: 'Ogun State',
    },
  ];
  const villageOptions = [
    {
      label: 'Ezeani Village 1',
      value: 'Ezeani Village',
    },
    {
      label: 'Osusus Village 2',
      value: 'Osusu Village',
    },
    {
      label: 'Ariara Village 3',
      value: 'Ariara Village',
    },
  ];

  // Form validation schema using Yup
  const contributorValidationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    village: Yup.string().required('Required'),
  });

  //Effect to hide scroll
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  return (
    <div className={styles.dashboardmain}>
      <h2>Welcome {first_name}</h2>
      <hr />
      <div className={styles.village_control}>
        <div className={styles.village_control__input}>
          <h3>VIllages you have control in</h3>
          <p>Add the villages you have control over within your state.</p>
          <div className={styles.input}>
            <Formik
              initialValues={{ village: '' }}
              validationSchema={Yup.object({
                village: Yup.string().required('Required'),
              })}
              onSubmit={() => {
                console.log('Submitting');
              }}
            >
              {(props) => (
                <Form>
                  <CustomSelectInput
                    placeholder="Select your village"
                    name="village"
                    options={villageOptions}
                    addVillageHandler={addVillageHandler}
                  />
                  {villageError && (
                    <TextError>Village already exists</TextError>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className={styles.village_control__outputs}>
          {villages.map((village, index) => {
            return (
              <div key={index} className={styles.output}>
                <p>{village}</p>{' '}
                <span
                  onClick={() => removeVillage(village)}
                  className={styles.cancel}
                >
                  x
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className={styles.main_bottom}>
        <div className={styles.main_bottom__contact}>
          <Formik
            initialValues={{ name: '', phone: '', whatsapp: '' }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              phone: Yup.number()
                .required('Required')
                .typeError('Invalid phone number'),
              whatsapp: Yup.number()
                .required('Required')
                .typeError('Invalid phone number'),
            })}
            onSubmit={(values) => console.log('Form data', values)}
          >
            {({ values }) => (
              <Form>
                <h5>Specify your key contact</h5>
                <p>
                  Specify your key contact information we can always reach you
                  on.
                </p>
                &nbsp;
                <div className={styles.input_field}>
                  <FormikControl
                    values={values}
                    control="input"
                    placeholder="Full name"
                    name="name"
                  />
                  <FormikControl
                    values={values}
                    control="input"
                    placeholder="Phone number"
                    name="phone"
                  />
                  <FormikControl
                    values={values}
                    control="input"
                    placeholder="Whatsapp number"
                    name="whatsapp"
                  />
                </div>
                <button className="btn_dark" type="submit">
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className={styles.main_bottom__contributors}>
          <div className={styles.heading}>
            <h5>Contributors</h5>
            <p onClick={() => setShowModal(true)}>Add a new contributor</p>
          </div>

          {/* CONTRIBUTOR MODAL */}
          {showModal && (
            <Modal
              show={showModal}
              onClose={() => setShowModal(false)}
              width="54.4rem"
            >
              <div className={styles.modal}>
                <div className={`${styles.modal__heading} modal_heading`}>
                  <h2>
                    Add a new <br />
                    <span>Contributor</span>
                  </h2>
                  <button
                    className={`closeBtn`}
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className={styles.modal__body}>
                  <p>Kindly enter the details of a contributor</p>
                  <div className={styles.details_form}>
                    <Formik
                      initialValues={{
                        firstName: '',
                        lastName: '',
                        state: '',
                        village: '',
                      }}
                      validationSchema={contributorValidationSchema}
                      onSubmit={(values) => console.log('Form data', values)}
                    >
                      {({ values }) => (
                        <Form autoComplete="off">
                          <FormikControl
                            values={values}
                            control="input"
                            placeholder="First Name"
                            name="firstName"
                            type="text"
                          />
                          <FormikControl
                            values={values}
                            control="input"
                            placeholder="Last Name"
                            name="lastName"
                            type="text"
                          />
                          <FormikControl
                            values={values}
                            control="select"
                            placeholder="Select your state"
                            name="state"
                            options={stateOptions}
                          />
                          <FormikControl
                            values={values}
                            control="select"
                            placeholder="Select your village"
                            name="village"
                            options={villageOptions}
                          />
                          <button
                            type="submit"
                            className="btn_dark w-full rounded-full h-20 mt-9"
                          >
                            Continue
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </Modal>
          )}
          {/* CONTRIBUTOR MODAL END */}
          <div className={styles.contributors_table}>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Mobile number</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>Okolie Festus</td>
                  <td>07085128680</td>
                  <td>
                    <Image src={status_check} />
                  </td>
                </tr>
                <tr>
                  <td>Okolie Festus</td>
                  <td>07085128680</td>
                  <td>
                    <Image src={status_check} />
                  </td>
                </tr>
                <tr>
                  <td>Okolie Festus</td>
                  <td>07085128680</td>
                  <td>
                    <Image src={status_check} />
                  </td>
                </tr>
                <tr>
                  <td>Okolie Festus</td>
                  <td>07085128680</td>
                  <td>
                    <Image src={status_check} />
                  </td>
                </tr>
                <tr>
                  <td>Okolie Festus</td>
                  <td>07085128680</td>
                  <td>
                    <Image src={status_check} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
