import styles from './Styles.module.scss';

import logo from '../../assets/logo.png';
import caret_down from '../../assets/caret_down.png';

import React from 'react';
import Image from 'next/image';
import DashboardLink from './DashboardLink';
import Link from 'next/link';

const DashboardNav = () => {
  return (
    <div className={styles.dashboardnav}>
      <Link href="/">
        <div className={styles.logo}>
          <Image src={logo} />
        </div>
      </Link>
      <div className={styles.profile}>
        <DashboardLink />
      </div>
    </div>
  );
};

export default DashboardNav;
