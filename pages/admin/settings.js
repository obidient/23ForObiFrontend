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
  const [groupModal, setGroupModal] = useState(false);
  const [value, setValue] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);

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
  const permissions = [
    'Add a village',
    'Add a state',
    'Remove users',
    'Download list',
    'Create group',
    'Invite members',
    'Remove members',
    'Create group',
    'Delete village',
    'Delete state',
  ];

  // Form validation schema using Yup
  const userValidationSchema = Yup.object({
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    phone: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirm_password: Yup.string().required('Required'),
    village: Yup.string().required('Required'),
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
            <div className="border border-[#F1F1F1] rounded-2xl bg-white h-[70vh] w-[95%] m-10">
              <div className="flex m-10 gap-10">
                <div className="flex flex-col items-center text-center p-[2.5rem]">
                  <Image src={avatar} className=""/>
                  <div>
                    <h2 className="p-0 mt-[0.9rem] text-[1.8rem] font-bold">Mark Essien</h2>
                    <p className="text-[#979797] text-[1.3rem] m-0 p-0">
                      Markessien@gmail.com
                    </p>
                    <button className="bg-[#018226] text-white rounded-full w-[100%] h-[41px] mt-[2.5rem] mb-[1.2rem] px-[1.25rem] hover:bg-[#2EE061] hover:text-black">
                      Change avatar
                    </button>
                    <h2 className="text-[#D60602] text-2xl cursor-pointer py-[10px] hover:bg-[#D60602] rounded-full hover:text-white hover:w-[100%] hover:py-[10px]">Delete avatar</h2>
                  </div>
                </div>
                <div className=" flex justify-between w-full">
                  <div className="my-[2.5rem] border-l-2 border-r-[#F1F1F1] px-[2.5rem] w-[100%]">
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
                          <div className="flex items-center justify-between gap-16 mb-8">
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
                          <div className="flex flex-row w-full justify-between gap-16">
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
                    <div className="flex mt-[38rem]">
                      <button className="ml-auto bg-[#018226] text-white rounded-full h-[5rem] px-[7.5rem] hover:bg-[#2EE061] hover:text-black">
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </TabPanel>
          <TabPanel>
            <div className="border border-[#F1F1F1] rounded-2xl bg-white h-[70vh] w-[95%] m-10 p-[5rem] flex flex-col">
              <div className="flex mb-[2rem]">
                <p className="text-[#979797] text-[1.8rem] m-0 p-0">
                  Your current password
                </p>
              </div>
              <div className="">
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
                      <div className="flex flex-row w-full justify-between gap-16 mt-[6.25rem]">
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
              <div className="flex mt-[29rem]">
                <button className="ml-auto bg-[#018226] text-white rounded-full px-[9rem] h-[5rem]">
                  Change password
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="border border-[#F1F1F1] rounded-2xl bg-white h-[70vh] w-[95%] m-10 text-[#2F3733] p-10 cursor-pointer">
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
            <div className="border border-[#F1F1F1] rounded-2xl bg-white h-[70vh] w-[95%] p-[5rem]">
              <div className="flex items-center mb-8">
                <button
                  className="bg-[#018226] w-[197px] h-[44px] rounded-full text-white flex items-center justify-center ml-auto"
                  onClick={() => setGroupModal(true)}
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
      {/**Delete Modal */}
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
      {/**Create Gropu Modal */}
      {groupModal && (
        <Modal
          show={showModal}
          onClose={() => setGroupModal(false)}
          width="54.4rem"
        >
          <div className={styles.modal}>
            <div className={`${styles.modal__heading} modal_heading`}>
              <h2>
                Create a <br />
                <span className="font-bold">New group</span>
              </h2>
              <button
                className={`closeBtn`}
                onClick={() => setGroupModal(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.modal__body}>
              <p className="my-5 text-[#7A7B7B]">
                Kindly enter the details to create a new group
              </p>
              <div className={styles.details_form}>
                <Formik
                  initialValues={{
                    village: '',
                  }}
                  validationSchema={userValidationSchema}
                  onSubmit={(values) => console.log('Form data', values)}
                >
                  {({ values }) => (
                    <Form autoComplete="off">
                      <FormikControl
                        values={values}
                        control="input"
                        placeholder="Enter group name"
                        name="village"
                        type="text"
                      />
                      <div className="p-4 border border-t-[#F1F1F1] outline-none">
                        <p className="text-[#7A7B7B] py-4">Assign permission</p>
                        <div className="">
                          <input
                            type="checkbox"
                            name="all"
                            className="outline-none"
                          />
                          <label
                            htmlFor="all"
                            className="text-[#2F3733] px-4 text-2xl py-4"
                          >
                            Assign all permission
                          </label>
                        </div>
                        <div className="grid grid-cols-3 py-2 border border-b-[#F1F1F1]">
                          {permissions &&
                            permissions.length &&
                            permissions.map((item, index) => (
                              <div key={index}>
                                <input
                                  type="checkbox"
                                  name={item}
                                  className="outline-none"
                                />
                                <label
                                  htmlFor={item}
                                  className="text-[#2F3733] p-4 my-6 text-[13px]"
                                >
                                  {item}
                                </label>
                              </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-between my-5">
                          <p>Activate group</p>
                          <Toggle
                            isOn={value3}
                            handleToggle={() => setValue3(!value3)}
                            onColor="#AAFBC1"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn_dark w-full rounded-full h-20 mt-9"
                      >
                        Save group
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </AdminPage>
  );
};

export default settings;
