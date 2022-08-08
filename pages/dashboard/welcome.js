import React, { useState } from 'react';
import { useRouter } from 'next/router';
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
import Head from 'next/head';
import useAuthStore from '../../store/authStore';
import axios from 'axios';

const welcome = () => {
  const { accessToken } = useAuthStore();
  const token = accessToken;
  // console.log(token);
  const router = useRouter();
  const [steps, setSteps] = useState(1);
  const [progress, setProgress] = useState(20);
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
        return <FirstStep formData={formData} setFormData={setFormData} />;
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

  // handle steps
  const handleSubmit = () => {
    setSteps(steps + 1);
    setProgress(progress + 20);
  };

  // submit forms
  const submitForm = async () => {
    // console.log(formData);
    const url = 'https://api.23forobi.com/user-data';
    // const headers = { Authorization: 'Bearer ' + token };
    const data = formData;
    try {
      await axios
        .post(
          url,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'content-type': 'application/json',
            },
          },
          data
        )
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            router.push('/dashboard/summary');
          }
        });
    } catch (error) {
      console.log(error);
    }
    //console.log('Submiited');
    //console.log(formData);
    //router.push('/dashboard/summary');
  };

  const handleSkip = () => {
    console.log('Skipped');
    // router.push('/dashboard/summary');
  };

  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <div className={`container`}>
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
            disabled1={!formData.pvc}
            disabled2={!formData.vote}
            disabled3={!formData.available}
            disabled4={!formData.state || !formData.lga || !formData.village}
            disabled5={!formData.full_name || !formData.phone || formData.phone.length < 11}
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
    </>
  );
};

export default welcome;
