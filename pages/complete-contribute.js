import React from 'react';
import ContributeMethod from '../components/misc/ContributeMethod';
import styles from './pagestyles/home.module.scss';
import logo from '../assets/logo.png';
import Image from 'next/image';

const contributeComplete = () => {
  return (
    <div className={`container`}>
      <div className={styles.contribute}>
        <div className={styles.logo}>
          <Image src={logo} />
        </div>
        <h1>
          Please select how <br />
          <span>You wish to contribute</span>
        </h1>
        <ContributeMethod />
        <div className={styles.footer}>
          <h5>Note</h5>
          <p>
            You can also do social campaigns by sending images via whatsapp to
            some numbers we will provide to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default contributeComplete;
