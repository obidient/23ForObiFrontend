import React, { useState, useContext, useEffect } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import styles from './Styles.module.scss';
import avatar from '../../assets/avatar.png';
import SelectInput from './../misc/SelectInput';

//Form Imports
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Prevent serverside redering on the FormikControl Component
import dynamic from 'next/dynamic';
import useAuthStore from '../../store/authStore';
import useUserStore from '../../store/userStore';
import stateDetails from '../../data/stateDetails';

import { getVillages } from '../../adapters/requests';

//Images
import achieveActive from '../../assets/achieActive.png';
import achieveDisabled from '../../assets/achieDisabled.png';
import copy from '../../assets/copy.png';
import level1 from '../../assets/level-1.svg';
import level2 from '../../assets/level-2.svg';
import level3 from '../../assets/level-3.svg';
import level4 from '../../assets/level-4.svg';
import level5 from '../../assets/level-5.svg';
import level6 from '../../assets/level-6.svg';
import level7 from '../../assets/level-7.svg';
import level8 from '../../assets/level-8.svg';
import level9 from '../../assets/level-9.svg';
import level10 from '../../assets/level-10.svg';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

//data
import StateContext from '../../Context/StateContext'
import { getStates } from '../../adapters/requests';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FormikControl = dynamic(() => import('../Forms/FormikControl'), {
  ssr: false,
});

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const ProfileDisplay = ({ userVoters, allState }) => {
  const { accessToken } = useAuthStore()
  const [ stateList, setStateList ] = useState(allState)
  const [idState, setIdState ] = useState('')
  const [ activeState, setActiveState ] = useState('')
  const { states } = useContext(StateContext)
  
    console.log(activeState)

  const { userProfile } = useAuthStore();
  const { userStates } = useUserStore();


    const callAPI = async (dataValue) => {
      const fil = stateList.find((item) => item.state_name === dataValue)
      setIdState(fil.id)
      // console.log(fil)
      
      
    };
    
  
  //   const fetcher = (url, token) =>
  //   axios
  //     .get(url, {
  //        mode: 'no-cors',
  //       headers: { Authorization: "Bearer " + token },
  //     })
  //     .then((res) => res.data);

  // const { data, error } = useSWR(
  //   [getVillages(idState), accessToken],
  //   fetcher
  // );

  // console.log(data)


 
  //console.log(userVoters)
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const referalCode =
    'fceuyfgieufheoijeodi/1234.343rniuehfcnokdsncoisncvd/dfjkeb.wngvvsocxoiscoisocs';

  const handleCopy = (newState) => () => {
    navigator.clipboard.writeText(referalCode);
    setState({ open: true, ...newState });
  };

  // console.log(userStates)

  const first_name = userProfile?.first_name;
  const last_name = userProfile?.last_name;
  const email = userProfile?.email;
  const image = userProfile?.image;

  //Initialize select options
  // const stateOptions = stateList.map((item, index) => ({
  //   label: `${item.state_name}`,
  //   option: `${item.slug}`,
  // }));
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

  const lgaOptions = [
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

  // Initial form values
  const initialValues = {
    firstName: first_name,
    lastName: last_name,
    email: email,
    state: '',
    LGA: '',
    village: '',
  };

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    // state: Yup.string().required('Required'),
    // LGA: Yup.string().required('Required'),
    // village: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log("values")
  }

  

  return (
    <div className={styles.profile}>
      <div className={styles.profile__profileMain}>
        <h2>Profile</h2>

        <div className={styles.profile__profileContent}>
          <div className={styles.avatar}>
            <Image src={image ? image : avatar} />
            <p className={styles.avatar__pTag}>edit image</p>
            <span>Remove Image</span>
          </div>
          <div className={styles.form}>
            <div className={styles.form__text}>
              <h3>Man on Ground</h3>
              <p>
                You are our man on ground, you will assist in educating others
                on how to add voters and so much.
              </p>
            </div>
            <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={(values, { setSubmitting }) => {
         console.log(values)
       }}
     >
       {({ values, handleChange }) => (
         <Form>
            <FormikControl    
              control="input"
              placeholder="First Name"
              name="firstName"
              type="text"
            />
            <FormikControl    
              control="input"
              placeholder="Last Name"
              name="lastName"
              type="text"
            />
             <FormikControl    
              control="input"
              placeholder="Email"
              name="email"
              type="email"
            />
             <select  name="state" onChange={(e) => {
                  console.log(e.currentTarget.value)
                  setActiveState(e.currentTarget.value)
                  callAPI(e.currentTarget.value)
                }} >
            <option value="">--select your state---</option>
              {stateList?.map((item, index) => (
                <option  value={item.state_name}>{item.state_name}</option>
              ))}
            </select>

            <FormikControl    
              control="select"
              placeholder="village"
              name="village"
              type="text"
            />

            <FormikControl    
              control="select"
              placeholder="LGA"
              name="LGA"
              type="text"
            />
          
           <button className="btn_dark mt-8" type="submit">
             Update
           </button>
         </Form>
       )}



     </Formik>
          </div>
        </div>
      </div>
      <div className={styles.profile__achievement}>
        <h2>Levels</h2>
        <div className={styles.profile__image}>
          {userVoters && userVoters.length > 0 ? (
            <>
              {userVoters.length >= 3 ? (
                <div>
                  <Image src={level1} alt="achievement" />
                </div>
              ) : (
                <div>
                  <Image
                    src={level1}
                    alt="achievement"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              )}
              {userVoters.length >= 6 ? (
                <div>
                  <Image src={level2} alt="achievement" />
                </div>
              ) : (
                <div>
                  <Image
                    src={level2}
                    alt="achievement"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              )}
              {userVoters.length >= 9 ? (
                <div>
                  <Image src={level3} alt="achievement" />
                </div>
              ) : (
                <div>
                  <Image
                    src={level3}
                    alt="achievement"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              )}
              {userVoters.length >= 12 ? (
                <div>
                  <Image src={level4} alt="achievement" />
                </div>
              ) : (
                <div>
                  <Image
                    src={level4}
                    alt="achievement"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              )}
              {userVoters.length >= 15 ? (
                <div>
                  <Image src={level5} alt="achievement" />
                </div>
              ) : (
                <div>
                  <Image
                    src={level5}
                    alt="achievement"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              )}
              {userVoters.length >= 18 ? (
                <div>
                  <Image src={level6} alt="achievement" />
                </div>
              ) : (
                <div>
                  <Image
                    src={level6}
                    alt="achievement"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              )}
              {userVoters.length >= 21 ? (
                <div>
                  <Image src={level7} alt="achievement" />
                </div>
              ) : (
                <div>
                  <Image
                    src={level7}
                    alt="achievement"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              )}
              {userVoters.length >= 24 ? (
                <div>
                  <Image src={level8} alt="achievement" />
                </div>
              ) : (
                <div>
                  <Image
                    src={level8}
                    alt="achievement"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              )}
              {userVoters.length >= 27 ? (
                <div>
                  <Image src={level9} alt="achievement" />
                </div>
              ) : (
                <div>
                  <Image
                    src={level9}
                    alt="achievement"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              )}
              {userVoters.length >= 30 ? (
                <div>
                  <Image src={level10} alt="achievement" />
                </div>
              ) : (
                <div>
                  <Image
                    src={level10}
                    alt="achievement"
                    style={{ opacity: 0.3 }}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center justify-center">
                <h2 className="text-2xl">No achievements yet!</h2>
              </div>
            </>
          )}
        </div>

        <div className={styles.profile__referer}>
          <p className={styles.profile__bold}>Refere</p>
          <div className={styles.profile__refererCon}>
            <div>
              <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>
                Referal code:{' '}
              </span>
              <span style={{ minWidth: '120px', color: '#5678CE' }}>
                {referalCode}
              </span>
              <p style={{ color: '#5678CE' }}></p>
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={handleCopy({
                vertical1: 'top',
                horizontal2: 'center',
              })}
            >
              <Image src={copy} alt="copy" />
            </div>
          </div>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Copied!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps(value) {
//   try {
//     const stateData = await getVillages();

//     return {
//       props: {
//         allState: stateData?.data
//       }
//     }
    
//   } catch (error) {
//     return {
//       props: {
//         stateData: []
//       }
//     }
//   }
// }

export default ProfileDisplay;
