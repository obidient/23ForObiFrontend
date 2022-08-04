import Image from 'next/image';
import Link from 'next/link';
import styles from './Styles.module.scss';
import add_img_green from '../../assets/add_img_green.png';
import VillageStat from './VillageStat';
import Modal from './../Modal/Index';
import { useState } from 'react';
import { Form, Formik } from 'formik';
// import { CustomSelectInput } from '../Forms/SelectInput';
import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import TextError from '../Forms/TextError';
import FormikControl from './../Forms/FormikControl';
import useAuthStore from './../../store/authStore';
import axios from 'axios';

const VillageDetails = ({ villageDetails, votersDetails }) => {
  const [showModal, setShowModal] = useState();
  const { accessToken } = useAuthStore();

  console.log(villageDetails);
  // Form validation schema using Yup
  const votersValidationSchema = Yup.object({
    name: Yup.string().required('Required'),
    contact: Yup.number().required('Required'),
  });
  console.log(villageDetails);

   const handleVoters = (values) => {

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

     axios.post(url, data, { headers })?.then((res) => {
       try {
         console.log(res.data);
       } catch (error) {
         console.log(error);
       }
     });
   };

   if(villageDetails === undefined) {
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
          <tr>
            <th>S/N</th>
            <th>VOTERS NAME</th>
            <th>MOBILE NUMBER</th>
            <th>ACTION</th>
          </tr>
          {votersDetails?.map((voters, index) => (
            <tr key={voters.id}>
              <td>{index + 1}</td>
              <td>{voters.name}</td>
              <td>+234 {voters.contact}</td>
              <td>
                <Link href="#">Edit</Link>
              </td>
            </tr>
          ))}
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
                <span>Village</span>
              </h2>
              <button
                className={`closeBtn`}
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.modal__body}>
              <p>Kindly enter the details for a new village</p>
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
    </div>
  );
};

export default VillageDetails;
