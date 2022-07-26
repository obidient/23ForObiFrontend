// import styles from '../styles/Home.module.scss';
// import Homepage from './';homepage
import Homepage from './states';
import axios from 'axios';
import Image from 'next/image';
import StateContext from '../Context/StateContext';
import React from 'react';
import { useState, useRef } from 'react';
import useAuthStore from '../store/authStore';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

import {
  getStates,
  getSupportGroups,
  getOverallprogress,
} from './../adapters/requests/index';
import GoogleAuth from './../utils/googleLogin';

export default function Home({
  total_number_of_voters,
  progress,
  initailData,
}) {
  const { userProfile, removeUser } = useAuthStore();
  
  const sendApi = async (res) => {
    console.log(res.credential);

    const token = res.credential
    let payload = await axios.post(
      `https://api.23forobi.com/google/token?token=${token}`,
      {
        headers: {
          Accept: 'application/json',
          'WWW-Authenticate': `Bearer ${res}`,
        },
      }
    );
    console.log(payload);
  };


  return (
    <div>
      {/*userProfile ? (
        userProfile?.image && (
          <>
            <Link href={'/'}>
              <>
                <Image
                  width={24}
                  height={24}
                  className="rounded-full"
                  src={userProfile?.image}
                  alt="profile photo"
                />
              </>
            </Link>
            <button
              type="button"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              Logout
            </button>
          </>
        )
      ) : (
      )*/}
      {/* <GoogleLogin onSuccess={(res) => sendApi(res)} /> */}
      {/* <GoogleLogin onSuccess={(res) => {
        console.log(res)
        const url = 'https://api.23forobi.com/google/token';
        const headers = {
          "Content-Type": "application/json",
          Accept: "application/json", 
        };
        const data = {
          "token": res.credential,
        }
        axios.post(url, data, headers).then((res) => {
          console.log(res)
        }) 
      }} 

      onError={console.log("Login Failed")}
      /> */}
      {/* <GoogleAuth /> */}
      {/*!token && <div ref={googlebuttonref} className="opacity: 0"></div>*/}
      {/* {!token && <div ref={googlebuttonref} className="opacity: 0"></div>} */}
      <Homepage
        data={initailData}
        progress={progress}
        total_number_of_voters={total_number_of_voters}
      />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const supportGroups = await getSupportGroups();
    const states = await getStates();
    const progress = await getOverallprogress();
    return {
      props: {
        initailData: supportGroups?.data,
        states: states?.data,
        progress: progress?.data?.progress_percentage,
        total_number_of_voters: progress?.data?.total_number_of_voters,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        states: [],
      },
    };
  }
  {
    /**
try {
    // const { data } = await axios.get('https://api.23forobi.com/support-group/');
    // const states = await axios.get('https://api.23forobi.com/states/');
    // const allStates = JSON.parse(JSON.stringify(states))

    const supportGroupsReq = axios({
      method: 'GET',
      url: 'https://api.23forobi.com/support-group/',
      headers: { cookie: ctx.req.headers.cookie },
    });
    const statesReq = axios({
      method: 'GET',
      url: 'https://api.23forobi.com/states/',
      headers: { cookie: ctx.req.headers.cookie },
    });
    const [support, states] = await Promise.all([supportGroupsReq, statesReq]);
    return {
      props: {
        // initialData: states,
        initialData: support.data,
        states: states.data,
      },
    };
  } catch (error) {
    // res.statusCode = 404;
    console.log(error);
    return {
      props: {},
    };
  }

*/
  }
}
