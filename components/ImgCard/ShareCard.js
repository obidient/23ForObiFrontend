import React from 'react';
import styles from './Styles.module.scss';

const ShareCard = ({ image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <a href={`https://twitter.com${image}`}>Twitter</a>
        <a href={`https://facebook.com${image}`}>Facebook</a>
        <a href={`https://whatsapp.com${image}`}>Whatsapp</a>
      </div>
    </div>
  );
};

export default ShareCard;
