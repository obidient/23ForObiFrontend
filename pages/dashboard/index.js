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

const dashboard = (props) => {
  const { states } = props;
  const [progress, setProgress] = useState(0);

  /////////// USER VILLAGES /////////////
  const { accessToken } = useAuthStore();
  // console.log(accessToken)

  const fetcher = async (url, token) =>
    await axios
      .get(url, { headers: { Authorization: 'Bearer ' + token } })
      .then((res) => res.data);

  const { data: villageData, error: villageError } = useSWR(
    [`https://api.23forobi.com/user-villages`, accessToken],
    fetcher
  );
  const { data: votersData, error: votersError } = useSWR(
    [`https://api.23forobi.com/voters-by-contributor`, accessToken],
    fetcher
  );

  useEffect(() => {
    try {
      const getVotersProgress = async () => {
        await axios
          .get('https://api.23forobi.com/voters-by-contributor', {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((res) => setProgress(res.data.length));
      };
      getVotersProgress();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const expectedVotes = 30
  let votersProgress = (100/expectedVotes)*progress

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className={`${styles.dashboard} container`}>
        <DashboardNav progress={votersProgress} progressbar="true" profile="true" />
        <div className={styles.dashboard__body}>
          <div className={styles.main}>
            <DashboardMain
              states={states}
              villageDetails={villageData}
              votersDetails={votersData}
            />
          </div>
          <div className={styles.aside}>
            <Sidebar voters={votersData} />
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
