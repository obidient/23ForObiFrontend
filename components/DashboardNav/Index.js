import styles from './Styles.module.scss';

import logo from '../../assets/23forobi.svg';
import caret_down from '../../assets/caret_down.png';

import React from 'react';
import Image from 'next/image';
import DashboardLink from './DashboardLink';
import Link from 'next/link';
import StateProgress from './../misc/StateProgress';

const DashboardNav = ({ progress, profile }) => {
  return (
    <div className={styles.dashboardnav}>
      <div className={styles.dashboardnav__top_left}>
        <Link href="/dashboard">
          <div className={styles.logo}>
            <Image src={logo} />
          </div>
        </Link>
        {progress && (
          <div className={styles.dashboardnav__progress}>
            <div className={styles.head}>
              <p>Your achievement</p>
              <p>20%</p>
            </div>
            <StateProgress progress={20} />
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
