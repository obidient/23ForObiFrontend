import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import DashboardMain from '../../components/Dashboard/DashboardMain';
import DashboardNav from '../../components/DashboardNav/Index';
import useAuthStore from '../../store/authStore';
// import styles from './pagestyles/home.module.scss';
import styles from '../pagestyles/home.module.scss';
import ProfileDisplay from './../../components/Dashboard/ProfileDisplay';
import ProtectedHOC from './../../components/misc/ProtectedHOC';

const dashboard = () => {
  const { accessToken } = useAuthStore();
  const [userVoters, setUserVoters] = useState([]);
  
  useEffect(() => {
    try {
      const getVotersProgress = async () => {
        await axios
          .get('https://api.23forobi.com/voters-by-contributor', {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((res) => {
            // console.log(res.data)
            setUserVoters(res.data)
          });
      };
      getVotersProgress();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={`${styles.profile} container`}>
        <DashboardNav progress="true" profile="true" />
        <div className={styles.profile__box}>
          <ProfileDisplay userVoters={userVoters} />
        </div>
      </div>
    </>
  );
};

export default ProtectedHOC(dashboard);
