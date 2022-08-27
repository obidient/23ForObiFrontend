import React, { useState, useContext, useEffect } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import FileBase from 'react-file-base64';
import { useRouter } from 'next/router';
import styles from './Styles.module.scss';
import avatar from '../../assets/avatar.png';
// import SelectInput from './../misc/SelectInput';

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
import { SelectVillagesInput } from '../Forms/SelectInput';
import SelectInput from '../Forms/SelectInput';
import Loader from '../Loader';

//data
import StateContext from '../../Context/StateContext';
import { getStates } from '../../adapters/requests';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FormikControl = dynamic(() => import('../Forms/FormikControl'), {
  ssr: false,
});

const ProfileDisplay = ({ userVoters, states }) => {
  const { userProfile, accessToken } = useAuthStore();
  let token = accessToken;
  const router = useRouter();

  const { userStates, userVillages, addVillages, userLga, addLga } =
    useUserStore();

  // const [loading, setLoading] = useState(false);
  /*useEffect(() => {
    if (!userVoters) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);*/

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
  const manOnGround = userProfile?.user_data?.data?.available;
  const first_name = userProfile?.user?.first_name;
  const last_name = userProfile?.user?.last_name;
  const email = userProfile?.user?.email;
  const image = userProfile?.user?.google_image_url;
  const userState = stateSelect;
  const userVillage = userProfile?.user_data?.data?.village;
  // console.log(userProfile)
  const [stateSelect, setStateSelect] = useState(
    userProfile?.user_data?.data?.state
    );

  /////////////// FORM /////////////////////
  // Initial form values
  const initialValues = {
    firstname: first_name,
    lastname: last_name,
    email: email,
    // state: userState,
    lga: userLga,
    village: userVillage,
    userImage: '',
  };
  
  const [values, setValues] = useState(initialValues);  
  
  const [initialUser, setInitialUser] = useState("");
  console.log(initialUser)
  useEffect(() => {
    axios
    .get(`https://api.23forobi.com/user-data`, {
      headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        const res = result.data;
        setInitialUser(res);
        return res;
      });
    }, [values.village]);
  
    const defaultState = initialUser?.state?.state_name;
    const defaultVillage = initialUser?.village?.name;
    const defaultLga = initialUser?.lga?.name;
    /// Change Handler
  const handleInputChange = async (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;
    
    if (name === 'state') {
      const stateID = e.target.value;
      await axios
        .get(`https://api.23forobi.com/list_lga_in_state/${stateID}`)
        .then((result) => {
          const res = result.data;
          addLga(res);
          return res;
        });
    }

    if (name === 'lga') {
      const lgaID = e.target.value;
      await axios
        .get(`https://api.23forobi.com/villages-in-lga/${lgaID}`)
        .then((result) => {
          const res = result.data;
          addVillages(res);

          return res;
        });
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  //FORM SUBMIT FUNCTION
  const handleUpdate = (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      // Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    try {
      axios
        .put(
          'https://api.23forobi.com/user-details',
          {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            village: values.village,
            state: values.state,
            userImage: values.userImage,
          },
          { headers: headers }
        )
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            router.push('/dashboard');
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const clear = () => {
    setValues({ ...values, userImage: '' });
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profile__profileMain}>
        <h2>Profile</h2>

        <div className={styles.profile__profileContent}>
          <div className={styles.avatar}>
            <Image
              src={values.userImage ? values.userImage : image}
              width={177}
              height={177}
            />
            <label className={styles.avatar__pTag}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setValues({ ...values, userImage: base64 })
                }
              />
              {image ? 'edit Image' : 'add Image'}
            </label>
            {values.userImage && (
              <span className="cursor-pointer" onClick={clear}>
                Remove Image
              </span>
            )}
          </div>
          <div className={styles.form}>
            {manOnGround === 'yes' && (
              <div className={styles.form__text}>
                <h3>Man on Ground</h3>
                <p>
                  You are our man on ground, you will assist in educating others
                  on how to add voters and so much.
                </p>
              </div>
            )}
            <form action="">
              <input
                type="text"
                control="input"
                placeholder="First Name"
                name="firstname"
                value={values.firstname}
                onChange={handleInputChange}
              />
              <input
                type="text"
                control="input"
                placeholder="Last Name"
                name="lastname"
                value={values.lastname}
                onChange={handleInputChange}
              />
              <input
                type="text"
                control="input"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
              {/* <div > */}

              <select
                onChange={handleInputChange}
                value={values.state}
                name="state"
                control="selectState"
              >
                <option value="default" disable hidden>
                  {defaultState}
                </option>
                ;
                {states?.map((item) => {
                  return (
                    <option
                      value={item.id}
                      selected={item.state_name == stateSelect ? true : false}
                      key={item.id}
                    >
                      {item.state_name}
                    </option>
                  );
                })}
              </select>
              <select
                // onChange={handleSelectState}
                value={values.lga}
                name="lga"
                onChange={handleInputChange}
              >
                <option value="default" disable hidden>
                  {defaultLga}
                </option>
                {
                  // !userVillages ? (
                  //   <option value={values.village}>{values.village}</option>
                  // ) : (
                  userLga?.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })
                  // )
                }
              </select>
              <select
                // onChange={handleSelectState}
                value={values.village}
                name="village"
                onChange={handleInputChange}
              >
                <option value="default" disable hidden>
                  {defaultVillage}
                </option>
                {
                  // !userVillages ? (
                  //   <option value={values.village}>{values.village}</option>
                  // ) : (
                  userVillages?.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })
                  // )
                }
              </select>
              <button
                className="btn_dark mt-8"
                type="submit"
                onClick={handleUpdate}
              >
                Update
              </button>
            </form>
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
              <div className="flex items-center justify-center w-full">
                <p className="text-2xl">No achievements yet!</p>
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
