import React from 'react';
import Image from 'next/image';
import styles from './Styles.module.scss';

import check from '../../assets/check.png';

const Contributor = ({ name, votes, img, type, first_name, last_name }) => {

  return (
    <div className={styles.contributor}>
      <Image src={img} alt="contributor" />
      {<h5>{name}</h5>}

      {type === 'contributor' ? (
        <p>Votes delivered {votes}</p>
      ) : (
        <div className={styles.guaranteed}>
          <Image src={check} alt="check" />
          <p>Guaranteed</p>
        </div>
      )}
    </div>
  );
};

export default Contributor;
