import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import DashboardMain from '../../components/Dashboard/DashboardMain';
import DeliverVotes from '../../components/Dashboard/DeliverVotes';
import DashboardNav from '../../components/DashboardNav/Index';
// import styles from './pagestyles/home.module.scss';
import styles from '../pagestyles/home.module.scss';
import useAuthStore from '../../store/authStore';

const dashboard = () => {
  // Auth State
  const { userProfile } = useAuthStore();
  console.log(userProfile);
  const router = useRouter();
  useEffect(() => {
    if (!userProfile) {
      router.push('/');
    }
  }, [userProfile, router]);

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

export default dashboard;
