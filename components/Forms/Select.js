import { Field, ErrorMessage } from 'formik';
import React from 'react';
import TextError from './TextError';

import styles from './Styles.module.scss';

const Select = ({ name, options, label, ...rest }) => {
  return (
    <>
      <Field
        as="select"
        className={styles.select}
        name={name}
        placeholder={label}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Select;
