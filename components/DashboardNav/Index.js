import styles from './Styles.module.scss';

import logo from '../../assets/logo.png';
import village_img_1 from '../../assets/village_img_1.png';
import caret_down from '../../assets/caret_down.png';

import React from 'react';
import Image from 'next/image';

const DashboardNav = () => {
  return (
    <div className={styles.dashboardnav}>
      <div className={styles.logo}>
        <Image src={logo} />
      </div>
      <div className={styles.profile}>
        <div className={styles.profile__user_img}>
          <Image src={village_img_1} />
        </div>
        <div className={styles.profile__dropdown}>
          <Image src={caret_down} />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
