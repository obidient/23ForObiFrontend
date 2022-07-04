import styles from './Styles.module.scss';
import React from 'react';

const TextError = ({ children }) => {
  return <div className={styles.error}>{children}</div>;
};

export default TextError;
