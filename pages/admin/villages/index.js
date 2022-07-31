import styles from '../admin.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import AdminPage from '../../../components/Admin/AdminPage';

import filterIcon from '../../../assets/filter.svg';
import circleIcon from '../../../assets/circle_add.svg';
import VillageList from '../../../data/villages';
import { useState } from 'react';
import Modal from '../../../components/Modal/Index';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../../components/Forms/FormikControl';
import stateDetails from '../../../data/stateDetails';

const villages = ({ villages }) => {
  const [showModal, setShowModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  // Form validation schema using Yup
  const villageValidationSchema = Yup.object({
    state: Yup.string().required('Required'),
    village: Yup.string().required('Required'),
  });

  //Initialize select options

  const stateOptions = stateDetails.map((item) => ({
    value: item.slug,
    label: item.name,
  }));

  return (
    <AdminPage>
      <div className="flex items-center justify-between mx-4 my-8">
        <div className="flex items-center justify-center">
          <button className="flex items-center justify-around border w-[100px] p-1 text-[#979797]">
            <span className="flex items-center justify-center px-2">
              <Image src={filterIcon} />
            </span>
            Filter
          </button>
        </div>
        <div>
          <button
            className="bg-[#018226] w-[197px] h-[44px] rounded-full text-white flex items-center justify-center"
            onClick={() => setShowModal(true)}
          >
            <span className="flex items-center justify-center px-2">
              <Image src={circleIcon} />
            </span>
            Add a new Village
          </button>
        </div>
      </div>
      <div className="my-6 bg-white p-3 border border-[#FFFFFF] rounded-xl m-10">
        <table className="table-fixed w-full text-justify">
          <thead>
            <tr className="h-[37px] border border-b-[#000000] text-[#979797] text-xl">
              <th className="px-5">SN</th>
              <th>VILLAGE NAME</th>
              <th>VILLAGE STATE</th>
              <th>NO OF CONTRIBUTORS</th>
              <th>PROGRESS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {VillageList && VillageList.length > 0 ? (
              VillageList.map((item, index) => (
                <tr
                  key={index}
                  className="h-[37px] border border-b-[#000000] text-[#979797] text-2xl"
                >
                  <td className="text-[#2F3733] px-5">{item.id}</td>
                  <td className="text-[#2F3733]">{item.name}</td>
                  <td className="text-[#2F3733]">{item.state}</td>
                  <td className="text-[#2F3733]">{item.contributors}</td>
                  <td className="text-[#2F3733]">{item.progress}%</td>
                  <td className="text-xl ">
                    <span className="mx-5 text-[#5678CE] underline cursor-pointer">
                      Edit
                    </span>
                    <span
                      className="mx-5 text-[#D60602] underline cursor-pointer"
                      onClick={() => setOpenDelete(true)}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <div className="flex items-center justify-center m-10 w-full text-black">
                <h2>No results</h2>
              </div>
            )}
          </tbody>
        </table>
      </div>
      <div className="my-6 m-10 bg-white border border-[#FFFFFF] rounded-xl h-[61px] flex items-center justify-between">
        <div className="m-5 text-[#2F3733] text-2xl">
          <h3>Showing 1-10 of 20</h3>
        </div>
        <div className="flex items-center justify-around m-5 text-[#979797]">
          <button className="w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
            Last
          </button>
          <button className="w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
            Prev
          </button>
          <button className="w-[41px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white bg-[#018226] text-white">
            1
          </button>
          <button className="w-[41px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
            2
          </button>
          <button className="w-[41px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
            3
          </button>
          <button className="w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
            Next
          </button>
          <button className="w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white">
            Last
          </button>
        </div>
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
                <span className="font-bold">Village</span>
              </h2>
              <button
                className={`closeBtn`}
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.modal__body}>
              <p className="my-5 text-[#7A7B7B]">
                Kindly enter the details of a new village
              </p>
              <div className={styles.details_form}>
                <Formik
                  initialValues={{
                    state: '',
                    village: '',
                  }}
                  validationSchema={villageValidationSchema}
                  onSubmit={(values) => console.log('Form data', values)}
                >
                  {({ values }) => (
                    <Form autoComplete="off">
                      <FormikControl
                        values={values}
                        control="select"
                        placeholder="Select your state"
                        name="state"
                        options={stateOptions}
                      />
                      <FormikControl
                        values={values}
                        control="input"
                        placeholder="Enter the name of a new village"
                        name="village"
                        type="text"
                      />
                      <button
                        type="submit"
                        className="btn_dark w-full rounded-full h-20 mt-9"
                      >
                        Save village
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
      {openDelete && (
        <Modal
          show={showModal}
          onClose={() => setOpenDelete(false)}
          width="44.5rem"
        >
          <div className={styles.modal}>
            <div className={`${styles.modal__heading} modal_heading`}>
              <h2>
                Delete
                <br />
                <span className="font-bold">Village</span>
              </h2>
              <button
                className={`closeBtn`}
                onClick={() => setOpenDelete(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.modal__body}>
              <p className="my-8 text-[#7A7B7B]">
                Kindly note that you are about to delete the village ukpor from
                the list. Are you sure?
              </p>
              <div className='flex items-center justify-around'>
                <button className='px-3 py-3 rounded-full w-[172px] border border-[#018226] text-[#018226]' >Cancel</button>
                <button className='w-[172px] bg-[#D60602] text-white px-3 py-3 rounded-full'>Delete</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </AdminPage>
  );
};

export default villages;
