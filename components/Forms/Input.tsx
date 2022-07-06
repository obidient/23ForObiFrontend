import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

import styles from './Styles.module.scss';

interface InputProps {
  name: string;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <>
      <Field className={styles.input} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Input;
