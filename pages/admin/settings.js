import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './admin.module.scss';
import AdminPage from '../../components/Admin/AdminPage';
import avatar from '../../assets/Essien.png';
import circleIcon from '../../assets/circle_add.svg';
import Image from 'next/image';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/Forms/FormikControl';
import Modal from '../../components/Modal/Index';
import Toggle from '../../components/misc/Toggle';

const roles = ['Profile', 'Security', 'Notifications', 'Groups'];
const settings = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [value, setValue] = useState(false);
  const [value2, setValue2] = useState(false);

  const userList = [
    {
      name: 'admin',
      status: 'active',
      users: 20,
    },
    {
      name: 'state admin',
      status: 'active',
      users: 20,
    },
    {
      name: 'normal admin',
      status: 'active',
      users: 20,
    },
  ];

  // Form validation schema using Yup
  const userValidationSchema = Yup.object({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    phone: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirm_password: Yup.string().required('Required'),
  });

  return (
    <AdminPage>
      <div>
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName="border-b border-[#018226] text-[#000] outline-none font-bold"
        >
          <TabList className="flex border-b border-[#979797] w-full items-center justify-start text-center">
            {roles.map((item) => (
              <Tab
                key={item}
                className="lg:px-8 py-3 text-3xl text-[#979797] lg:text-2xl   h-[41px] cursor-pointer hover:border-[#018226] hover:text-[#2F3733] hover:border-b "
              >
                {item}
              </Tab>
            ))}
          </TabList>
          <TabPanel>
            <div className="border border-[#F1F1F1] rounded-2xl bg-white h-auto w-[95%] m-10">
              <div className="flex m-10 gap-10">
                <div className="flex flex-col items-center justify-center text-center">
                  <Image src={avatar} />
                  <div>
                    <h2 className="p-0 m-0">Mark Essien</h2>
                    <p className="text-[#979797] text-[13px] m-0 p-0">
                      Markessien@gmail.com
                    </p>
                    <button className="bg-[#018226] text-white rounded-full w-[141px] h-[41px] my-6">
                      Change avatar
                    </button>
                    <h2 className="text-[#D60602] text-2xl ">Delete avatar</h2>
                  </div>
                </div>
                <div className=" flex justify-between w-full">
                  <div className="">
                    <Formik
                      initialValues={{
                        first_name: 'Mark',
                        last_name: 'Essien',
                        email: 'Markessien@gmail.com',
                        phone: '',
                      }}
                      validationSchema={userValidationSchema}
                      onSubmit={(values) => console.log('Form data', values)}
                    >
                      {({ values }) => (
                        <Form autoComplete="off">
                          <div className="flex items-center justify-between w-[700px] gap-4">
                            <FormikControl
                              values={values}
                              control="input"
                              placeholder="First Name"
                              name="first_name"
                              type="text"
                            />
                            <FormikControl
                              values={values}
                              control="input"
                              placeholder="Last Name"
                              name="last_name"
                              type="text"
                            />
                          </div>
                          <div className="flex flex-row w-full justify-between gap-4">
                            <FormikControl
                              values={values}
                              control="input"
                              placeholder="Enter email"
                              name="email"
                              type="text"
                            />
                            <FormikControl
                              values={values}
                              control="input"
                              placeholder="Enter phone number"
                              name="phone"
                              type="text"
                            />
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
              <div className="flex px-10">
                <button className="ml-auto m-4 bg-[#018226] text-white rounded-full w-[141px] h-[41px]">
                  Update Profile
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="border border-[#F1F1F1] rounded-2xl bg-white h-[100vh] w-[95%] m-10">
              <div className="flex m-10">
                <p className="text-[#979797] text-[16px] m-0 p-0">
                  Your current password
                </p>
              </div>
              <div className="p-10">
                <Formik
                  initialValues={{
                    password: '',
                    confirm_password: '',
                  }}
                  validationSchema={userValidationSchema}
                  onSubmit={(values) => console.log('Form data', values)}
                >
                  {({ values }) => (
                    <Form autoComplete="off">
                      <div className="flex items-center w-1/3">
                        <FormikControl
                          values={values}
                          control="input"
                          placeholder="First Name"
                          name="passowrd"
                          type="password"
                        />
                      </div>
                      <div className="flex flex-row w-full justify-between gap-4">
                        <FormikControl
                          values={values}
                          control="input"
                          placeholder="Change password"
                          name="password"
                          type="password"
                        />
                        <FormikControl
                          values={values}
                          control="input"
                          placeholder="Confirm password"
                          name="confirm_password"
                          type="password"
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="flex px-10">
                <button className="ml-auto m-4 bg-[#018226] text-white rounded-full w-[231px] h-[41px]">
                  Change password
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="border border-[#F1F1F1] rounded-2xl bg-white h-[100vh] w-[95%] m-10 text-[#2F3733] p-10 cursor-pointer">
              <div className="flex items-center justify-between border-b border-[#F1F1F1]">
                <h2 className="pb-4 pt-6 text-3xl">Get notifications</h2>
                <Toggle
                  isOn={value}
                  onColor="#AAFBC1"
                  handleToggle={() => setValue(!value)}
                />
              </div>
              <div className="flex items-center justify-between border-b border-[#F1F1F1]">
                <h2 className="pb-4 pt-6 text-3xl">
                  Get new village notification
                </h2>
                <Toggle
                  isOn={value2}
                  onColor="#AAFBC1"
                  handleToggle={() => setValue2(!value2)}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="border border-[#F1F1F1] rounded-2xl bg-white h-[100%] w-[95%] m-10">
              <div className="flex items-center mx-4 my-8">
                <button
                  className="bg-[#018226] w-[197px] h-[44px] rounded-full text-white flex items-center justify-center ml-auto"
                  onClick={() => setShowModal(true)}
                >
                  <span className="flex items-center justify-center px-2">
                    <Image src={circleIcon} />
                  </span>
                  Create new group
                </button>
              </div>
              <div className="my-6 bg-white p-3 border border-[#FFFFFF] rounded-xl m-10">
                <table className="table-fixed w-full text-justify">
                  <thead>
                    <tr className="h-[47px] border border-b-[#F1F1F1] text-[#979797] text-xl">
                      <th className="px-5">NAME</th>
                      <th>STATUS</th>
                      <th>NO OF USERS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList && userList.length > 0 ? (
                      userList.map((item, index) => (
                        <tr
                          key={index}
                          className="capitalize h-[47px] border border-b-[#F1F1F1] text-[#979797] text-2xl"
                        >
                          <td className="capitalize text-[#2F3733]">
                            {item.name}
                          </td>
                          <td className="capitalize text-[#2F3733]">
                            {item.status}
                          </td>
                          <td className=" text-[#2F3733]">{item.users}</td>

                          <td className="text-xl ">
                            <span
                              className="mx-5 text-[#5678CE] underline cursor-pointer"
                              onClick={() => setOpenEdit(true)}
                            >
                              Edit
                            </span>
                            <span
                              className="mx-5 text-[#D60602] underline cursor-pointer"
                              onClick={() => {
                                setOpenDelete(true);
                              }}
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
            </div>
          </TabPanel>
        </Tabs>
      </div>
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
                <span className="font-bold">Group</span>
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
                Kindly note that you are about to delete a group from the list.
                Are you sure?
              </p>
              <div className="flex items-center justify-around">
                <button className="px-3 py-3 rounded-full w-[172px] border border-[#018226] text-[#018226]">
                  Cancel
                </button>
                <button className="w-[172px] bg-[#D60602] text-white px-3 py-3 rounded-full">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </AdminPage>
  );
};

export default settings;