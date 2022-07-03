import React from 'react';
import SelectInput from './SelectInput';
import Input from './Input';

const FormikControl = ({ control, options, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
    case 'select':
      return <SelectInput options={options} {...rest} />;
    // return <SelectInput option="Select a village" formik={formik} />;
    case 'radio':
    default:
      return null;
  }
};

export default FormikControl;
