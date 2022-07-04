import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

import styles from './Styles.module.scss';

const Input = ({ name, label, formik, ...rest }) => {
  // console.log(formik.touched);

  return (
    <div>
      <input
        className={styles.input}
        size="xl"
        name={name}
        onBlur={formik.handleBlur}
        placeholder={label}
        value={formik.values[name]}
        onChange={formik.handleChange}
        {...rest}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <TextError className={styles.error}>{formik.errors[name]}</TextError>
      ) : null}
    </div>
  );
};

export default Input;
