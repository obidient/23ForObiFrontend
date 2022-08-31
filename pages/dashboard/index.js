import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import DashboardMain from '../../components/Dashboard/DashboardMain';
import Sidebar from '../../components/Dashboard/Sidebar';
import DashboardNav from '../../components/DashboardNav/Index';
// import styles from './pagestyles/home.module.scss';
import styles from '../pagestyles/home.module.scss';
import useAuthStore from '../../store/authStore';
import Loader from './../../components/Loader/index';
import ProtectedHOC from './../../components/misc/ProtectedHOC';
import { getStates } from '../../adapters/requests';
import useSWR from 'swr';
import axios from 'axios';
import { data } from 'autoprefixer';
import { googleLogout } from '@react-oauth/google';


const dashboard = (props) => {
  const { states } = props;
  const [progress, setProgress] = useState(0);
  // const [votersData, setVotersData] = useState("");
  const [voterData, setVoterData] = useState();
  const [villageData, setVIllageData] = useState();
  const WAIT_TIME = 5000;

  /////////// USER VILLAGES /////////////
  const { accessToken, removeUser } = useAuthStore();
  // console.log(progress);

  const fetcher = async (url, token) =>
    await axios
      .get(url, { headers: { Authorization: 'Bearer ' + token } })
      .then((res) => res.data);

  // const { data: villageData, error: villageError } = useSWR(
  //   [`https://api.23forobi.com/user-villages`, accessToken],
  //   fetcher
  // );
  // const { data: votersData, error: votersError } = useSWR(
  //   [`https://api.23forobi.com/voters-by-contributor`, accessToken],
  //   fetcher
  //   );

  //GET Village DATA AND REFRESH AFTER 5 SECONDS
  useEffect(() => {
    const id = setInterval(() => {
      // try {
      axios
        .get('https://api.23forobi.com/user-villages', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          // console.log(res)
          setVIllageData(res.data);
        })
        .catch((error) => {
          // console.log(error.response.data.detail);
        });
    }, WAIT_TIME);
    return () => clearInterval(id);
  }, [villageData]);

  //GET DATA AND REFRESH AFTER 5 SECONDS
  useEffect(() => {
    const id = setInterval(() => {
      // try {
      axios
        .get('https://api.23forobi.com/voters-by-contributor', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          // console.log(res)
          setVoterData(res.data);
        })
        .catch((error) => {
          // console.log(error.response.data.detail);
        });
    }, WAIT_TIME);
    return () => clearInterval(id);
  }, [voterData]);

  useEffect(() => {
    // try {
    // const getVotersProgress = async () => {
    // await
    axios
      .get('https://api.23forobi.com/voters-by-contributor', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setProgress(res.data.length);
      })
      // }).
      .catch((error) => {
        // console.log(error);
        console.log(error.response.data.detail);
        if (error.response?.data.detail == 'Could not validate credentials') {
          removeUser();
        }
      });
    // getVotersProgress();
    // }
    // }
  }, []);

  const expectedVotes = 30;
  let votersProgress = Math.trunc((100 / expectedVotes) * progress);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className={`${styles.dashboard} container`}>
        <DashboardNav
          progress={votersProgress}
          progressbar="true"
          profile="true"
          voterData={voterData}
        />
        <div className={styles.dashboard__body}>
          <div className={styles.main}>
            <DashboardMain
              states={states}
              villageDetails={villageData}
              votersDetails={voterData}
              awards={votersProgress}
            />
          </div>
          <div className={styles.aside}>
            <Sidebar voters={voterData} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ res }) => {
  try {
    const states = await getStates();
    return {
      props: {
        states: states?.data,
      },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default ProtectedHOC(dashboard);
