import styles from './Styles.module.scss';

import logo from '../../assets/23forobi.svg';
import caret_down from '../../assets/caret_down.png';

import React from 'react';
import Image from 'next/image';
import DashboardLink from './DashboardLink';
import Link from 'next/link';
import StateProgress from './../misc/StateProgress';

const DashboardNav = ({ progress, progressbar, profile, voterData }) => {
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
            <p className="text-[#979797]">
              (You have promised to deliver {voterData?.length})
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
