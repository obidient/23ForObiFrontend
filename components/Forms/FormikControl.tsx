import React from 'react';
import SelectInput, { OptionProps, valuesProps } from './SelectInput';
import Input from './Input';

interface FormikControlProps {
  placeholder?: string;
  name: string;
  control: string;
  type?: string;
  options: OptionProps[];
  values: valuesProps;
}

const FormikControl: React.FC<FormikControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
    case 'select':
      return <SelectInput {...rest} />;
    case 'radio':
    default:
      return null;
  }
};

export default FormikControl;
