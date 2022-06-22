import React from 'react';
import DashboardMain from '../../components/Dashboard/DashboardMain';
import DeliverVotes from '../../components/Dashboard/DeliverVotes';
import DashboardNav from '../../components/DashboardNav/Index';
// import styles from './pagestyles/home.module.scss';
import styles from '../pagestyles/home.module.scss';
import ProfileDisplay from './../../components/Dashboard/ProfileDisplay';

const dashboard = () => {
  return (
    <div className={`${styles.profile} container`}>
      <DashboardNav />
      <div className={styles.profile__box}>
        <div className={styles.head}>
          <h2>Profile</h2>
          <hr />
        </div>
        <ProfileDisplay />
      </div>
    </div>
  );
};

export default dashboard;
