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
import useSWR from 'swr';

//GET STATE
const fetcher = async (url, token) =>
  await axios
    .get(url)
    .then((res) => res.data);

const profile = (props) => {
  const { accessToken } = useAuthStore();
  const [userVoters, setUserVoters] = useState([]);
  const [progress, setProgress] = useState(0)


  const { data: stateData, error: stateError } = 
    useSWR(`https://api.23forobi.com/states`, fetcher
      );

  console.log(stateData);

  
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
            setProgress(res.data.length)
          });
      };
      getVotersProgress();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const expectedVotes = 30;
  let votersProgress = Math.trunc((100 / expectedVotes) * progress);
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={`${styles.profile} container`}>
        <DashboardNav
          progress={votersProgress}
          progressbar="true"
          profile="true"
        />
        <div className={styles.profile__box}>
          <ProfileDisplay userVoters={userVoters} states={stateData} />
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

export default ProtectedHOC(profile);
