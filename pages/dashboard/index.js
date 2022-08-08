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

const dashboard = (props) => {
  const { states } = props;

  /////////// USER VILLAGES /////////////
  const { accessToken } = useAuthStore();

  const fetcher = (url, token) =>
    axios
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

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className={`${styles.dashboard} container`}>
        <DashboardNav progress="true" profile="true" />
        <div className={styles.dashboard__body}>
          <div className={styles.main}>
            <DashboardMain
              states={states}
              villageDetails={villageData}
              votersDetails={votersData}
            />
          </div>
          <div className={styles.aside}>
            <Sidebar />
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
