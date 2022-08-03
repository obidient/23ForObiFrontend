import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../pagestyles/home.module.scss';
import DashboardNav from '../../components/DashboardNav/Index';
import StateProgress from '../../components/misc/StateProgress';
import nextIcon from '../../assets/arrow-right-2.png';
import { Formik, Field, Form } from 'formik';

const welcome = () => {
  const [select, setSelect] = useState('');
  const initialValues = {
    selected: '',
  };
  const enabledBtn =
    'flex items-center justify-center w-[173px] h-[44px] bg-[#018226]  rounded-full text-white';
  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(select);
  };
  return (
    <div className={`${styles.dashboard} container h-[100vh]`}>
      <DashboardNav />
      <div className="flex flex-col justify-center py-11">
        <h2 className="text-4xl font-light mt-10">
          We are so glad to <br />
          <span className="font-bold">Have you here</span>
        </h2>
        <hr className="mb-5 mt-2" />
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between  my-2">
          <div className="lg:w-3/4 w-full">
            <h2 className="text-[#018226] font-bold text-3xl">
              HERE ARE A FEW QUESTIONS TO GET YOU STARTED.
            </h2>
          </div>
          <div className="lg:w-1/4 w-1/2 py-5 lg:py-0">
            <StateProgress progress={20} />
            <p className="my-1">Progress : 1</p>
          </div>
        </div>
      </div>
      <div className="my-0">
        <div>
          <h2 className="text-[#2F3733] text-3xl">
            Do you have your PVC (Permanent voters card)?
          </h2>
          <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
            {({ values }) => (
              <Form>
                <div className="my-5">
                  <Field type="radio" name="selected" value="yes" />
                  <label className="px-3 lg:text-2xl text-4xl font-normal text-[#2F3733]">
                    Yes
                  </label>
                </div>
                <div>
                  <Field type="radio" name="selected" value="no" />
                  <label className="px-3 lg:text-2xl text-4xl font-normal text-[#2F3733]">
                    No
                  </label>
                </div>
                <hr className="mb-5 mt-10" />
                <div>
                  <button
                    type="submit"
                    disabled={!values}
                    className={
                      !values ? `${enabledBtn} opacity-40` : enabledBtn
                    }
                  >
                    Next
                    <div className="flex items-center pl-4">
                      <Image src={nextIcon} />
                    </div>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default welcome;
