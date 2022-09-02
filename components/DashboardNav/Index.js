import styles from './Styles.module.scss';

import logo from '../../assets/23forobi.svg';
import caret_down from '../../assets/caret_down.png';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DashboardLink from './DashboardLink';
import Link from 'next/link';
import StateProgress from './../misc/StateProgress';
import useAuthStore from '../../store/authStore';
import axios from 'axios';

const DashboardNav = ({ progressbar, profile, voterData }) => {
  const { accessToken } = useAuthStore();
  const [votersProgress, setVotersProgress] = useState(0)
  const [villaId, setVillaId] = useState(null)

  useEffect(() => {
    const fetchUserVilla = async () => {
      await axios
        .get('https://api.23forobi.com/user-villages', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          //console.log(res.data[0].village.id);
          setVillaId(res.data[0].village.id)
        });
    };
    fetchUserVilla()
  }, [])

  useEffect(() => {
    const fetchVillaById = async () => {
      await axios.get(`https://api.23forobi.com/voters/${villaId}`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => {
        console.log(res.data)
        setVotersProgress(res.data.length)
      })
    }
    fetchVillaById()
  },[villaId])

  const expectedVotes = 30;
  const progress = Math.trunc((100 / expectedVotes) * votersProgress);
  return (
    <div className={styles.dashboardnav}>
      <div className={styles.dashboardnav__top_left}>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={logo} />
          </div>
        </Link>
        {progressbar && (
          <div className={styles.dashboardnav__progress}>
            <div className={styles.head}>
              <p>Your achievement</p>
              <p>{progress}%</p>
            </div>
            <StateProgress progress={progress} />
            <p className="text-[#979797] text-2xl">
              (You have promised to deliver {votersProgress} votes)
            </p>
          </div>
        )}
      </div>
      {profile && (
        <div className={styles.profile}>
          <DashboardLink />
        </div>
      )}
    </div>
  );
};

export default DashboardNav;
