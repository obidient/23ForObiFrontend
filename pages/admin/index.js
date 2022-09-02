import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './admin.module.scss';
import logo from '../../assets/23forobi.svg';
import eye from '../../assets/eye-slashed.png';
import close from '../../assets/close.png';
import Loader from '../../components/Loader';
//Form Imports
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/Forms/FormikControl';
import { loginAdmin } from '../../adapters/requests';

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: '',
    password: '',
  };
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    const headers = {
      accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const callApi = async () => {
      try {
        setLoading(true);
        await loginAdmin(values, headers)?.then((res) => {
          // console.log(res);
          if (res.status === 200) {
            router.push('/admin/dashboard');
          }
        });
        setLoading(false);
      } catch (error) {
        // console.log(error);
      }
    };
    callApi();
  };

  return (
    <div className="container flex flex-col">
      <div className="pt-12 pl-1 pb-12 cursor-pointer">
        <Link href="/">
          <div className="">
            <Image src={logo} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="lg:w-[504px] w-full  h-[450px] border border-[#CDFFDB] rounded-xl shadow-[#026A200D] p-9">
          <div className="flex items-center justify-between border-[#E1E1E1] border-b lg:py-5 py-16">
            <h2 className="lg:text-3xl text-5xl">
              <span className="font-light">Log-in with</span>
              <br /> Your details
            </h2>
            <div>
              <Image src={close} alt="close" />
            </div>
          </div>
          <div className={`flex flex-col py-10 lg:py-5 ${styles.form}`}>
            <p className="text-[#7A7B7B] py-6">
              Kindly enter your registration details to continue
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values }) => (
                <Form autoComplete="off">
                  <FormikControl
                    values={values}
                    control="input"
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                  />

                  <FormikControl
                    values={values}
                    control="input"
                    placeholder="Enter your password"
                    name="password"
                    type="password"
                  />

                  <div className="flex items-center justify-between">
                    <div className="text-3xl lg:text-2xl my-10">
                      <input type="checkbox" />
                      <label htmlFor="checkbox" className="px-2">
                        Remember me
                      </label>
                    </div>
                    <Link href={'/'}>
                      <a className="text-3xl lg:text-2xl text-[#5678CE] underline">
                        Request for password reset
                      </a>
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="btn_dark my-10 w-[434px] h-[41px] items-center rounded-full font-normal text-3xl"
                      type="submit"
                      onSubmit={onSubmit}
                    >
                      {loading ? 'Logging ...' : 'Log-in'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Login;
