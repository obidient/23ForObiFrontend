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

const dashboard = () => {
  
  return (
    <div className={`${styles.dashboard} container`}>
      <DashboardNav />
      <div className={styles.dashboard__body}>
        <div className={styles.main}>
          <DashboardMain />
        </div>
        <div className={styles.aside}>
          <DeliverVotes />
        </div>
      </div>
    </div>
  );
};

export default ProtectedHOC(dashboard);
