import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DashboardMain from '../../components/Dashboard/DashboardMain';
import DeliverVotes from '../../components/Dashboard/DeliverVotes';
import DashboardNav from '../../components/DashboardNav/Index';
// import styles from './pagestyles/home.module.scss';
import styles from '../pagestyles/home.module.scss';
import useAuthStore from '../../store/authStore';
import Loader from './../../components/Loader/index';
import ProtectedHOC from './../../components/misc/ProtectedHOC';
import { getStates } from '../../adapters/requests';

const dashboard = (props) => {
  const { states } = props
  
  return (
    <div className={`${styles.dashboard} container`}>
      <DashboardNav />
      <div className={styles.dashboard__body}>
        <div className={styles.main}>
          <DashboardMain states={states}/>
        </div>
        <div className={styles.aside}>
          <DeliverVotes />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({res }) => {
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
