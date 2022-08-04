import React, { useState } from 'react';
import Image from 'next/image';
import { Formik, Field, Form } from 'formik';
import styles from '../pagestyles/home.module.scss';
import DashboardNav from '../../components/DashboardNav/Index';
import StateProgress from '../../components/misc/StateProgress';

// steps
import FirstStep from '../../components/Welcome/Step1';
import SecondStep from '../../components/Welcome/Step2';
import ThirdStep from '../../components/Welcome/Step3';
import FourthStep from '../../components/Welcome/Step4';
import FifthStep from '../../components/Welcome/Step5';
import StepButton from '../../components/misc/StepButton';

const welcome = () => {
  const [steps, setSteps] = useState(1);
  const [progress, setProgress] = useState(20);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    pvc: '',
    vote: '',
    available: '',
    state: '',
    lga: '',
    village: '',
    full_name: '',
    phone: '',
  });

  const conditionalComponent = () => {
    switch (steps) {
      case 1:
        return <FirstStep formData={formData} setFormData={setFormData}/>;
      case 2:
        return <SecondStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <ThirdStep formData={formData} setFormData={setFormData} />;
      case 4:
        return <FourthStep formData={formData} setFormData={setFormData} />;
      case 5:
        return <FifthStep formData={formData} setFormData={setFormData} />;

      default:
        return <FifthStep formData={formData} setFormData={setFormData} />;
    }
  };

 
  
 
  const handleSubmit = () => {
    setSteps(steps + 1);
    setProgress(progress + 20);
  };

  const submitForm = () => {
    console.log('Submiited');
    console.log(formData)
  };

  const handleSkip = () => {
    console.log('Skipped');
  };

  const initialValues = {
    selected: '',
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
            <StateProgress progress={progress} />
            <p className="my-1">Progress : {steps}</p>
          </div>
        </div>
      </div>
      <div>
        {conditionalComponent()}
        <StepButton
          steps={steps}
          handleSubmit={handleSubmit}
          submitForm={submitForm}
          handleSkip={handleSkip}
          type="submit"
        />
      </div>

      {/*<div className="my-0">
        <div>
          <h2 className="text-[#2F3733] text-3xl">
            Do you have your PVC (Permanent voters card)?
          </h2>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => console.log(values)}
          >
            {(dirty) => (
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
                    disabled={!dirty}
                    className={!dirty ? `${enabledBtn} opacity-40` : enabledBtn}
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
            </div>*/}
    </div>
  );
};

export default welcome;
