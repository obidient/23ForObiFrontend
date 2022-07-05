import styles from './Styles.module.scss';
import React, { ReactNode } from 'react';

interface TextErrorProps {
  children?: ReactNode;
}

const TextError: React.FC<TextErrorProps> = ({ children }) => {
  return <div className={styles.error}>{children}</div>;
};

export default TextError;
