import Image from 'next/image';
import Link from 'next/link';
import styles from './Styles.module.scss';
import VillageStat from './VillageStat';
import Modal from './../Modal/Index';
import { useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
// import { CustomSelectInput } from '../Forms/SelectInput';
import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import TextError from '../Forms/TextError';
import FormikControl from './../Forms/FormikControl';
import useAuthStore from './../../store/authStore';
import axios from 'axios';

//IMPORT IMAGES
import add_img_green from '../../assets/add_img_green.png';
import CompleteModal from './../misc/CompleteModal';

const VillageDetails = ({ villageDetails, votersDetails }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState();
  const [showCompleteModal, setShowCompleteModal] = useState();
  const { accessToken } = useAuthStore();

  //FILTER VOTERS BY VILLAGE NAME
  const votersInVillage = votersDetails?.filter(
    (items) => items.village.name === villageDetails.village.name
  );

  // Form validation schema using Yup
  const votersValidationSchema = Yup.object({
    name: Yup.string().required('Required'),
    contact: Yup.number().required('Required'),
  });

  const handleVoters = async (values) => {
    const url = 'https://api.23forobi.com/voters';
    const data = {
      name: values.name,
      contact: values.contact,
      village_id: villageDetails.village.id,
    };
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      await axios.post(url, data, { headers: headers })?.then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
    /*axios.post(url, data, { headers })?.then((res) => {
      try {
        //  console.log(res.data);
      } catch (error) {
        //  console.log(error);
      }
      setShowModal(false);
      setShowCompleteModal(true);
    });*/
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  if (villageDetails === undefined) {
    return (
      <div className="flex">
        <h2 className="m-auto text-3xl">No Village</h2>
      </div>
    );
  }

  return (
    <div className={styles.village_details}>
      <hr />
      <div className={styles.village_details__heading}>
        <h2>Voters</h2>

        <div
          className={styles.dashboardmain_add_village}
          onClick={() => setShowModal(true)}
        >
          <Image src={add_img_green} />
          <p>Add a vote you will deliver</p>
        </div>
      </div>
      <div className={styles.village_details__table}>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>VOTERS NAME</th>
              <th>MOBILE NUMBER</th>
              <th>ACTION</th>
            </tr>
          </thead>
          {votersInVillage && votersInVillage.length > 0 ? (
            votersInVillage?.map((voters, index) => (
              <tbody key={voters.id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{voters.name}</td>
                  <td>+234{voters.contact.slice(1,voters.contact.length)}</td>
                  <td>
                    <Link href="#">Edit</Link>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td className="my-10 text-2xl">No data</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      {/* NEW VOTER MODAL */}
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
                <span>Voter</span>
              </h2>
              <button
                className={`closeBtn`}
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.modal__body}>
              <p>Kindly enter the details for a new voter</p>
              <div className={styles.details_form}>
                <Formik
                  initialValues={{
                    name: '',
                    contact: '',
                  }}
                  validationSchema={votersValidationSchema}
                  onSubmit={handleVoters}
                >
                  {({ values }) => (
                    <Form autoComplete="off">
                      <FormikControl
                        values={values}
                        control="input"
                        placeholder="Enter full name"
                        name="name"
                        type="text"
                      />
                      <FormikControl
                        values={values}
                        control="input"
                        placeholder="Phone Number"
                        name="contact"
                        type="text"
                      />

                      <button
                        type="submit"
                        className="btn_dark w-full rounded-full h-20 mt-9"
                        onClick={handleVoters}
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
      {/* NEW VOTER MODAL END */}

      {/* COMPLETE MODAL */}

      {showCompleteModal && (
        <CompleteModal
          showCompleteModal={showCompleteModal}
          setShowCompleteModal={setShowCompleteModal}
          heading={'Congratulations! You have successfully added a new voter.'}
          description={
            'Go Champ! You are doing so great, let’s keep the fire burning'
          }
        />
      )}

      {/* END COMPLETE MODAL */}
    </div>
  );
};

export default VillageDetails;
