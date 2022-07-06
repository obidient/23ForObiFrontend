import { useField } from 'formik';
import Select from 'react-select';
import styles from './Styles.module.scss';
import TextError from './TextError';

export interface OptionProps {
  label: string;
  value: string;
}

export interface valuesProps {
  firstName: string;
  lastName: string;
  email: string;
  state: string;
}

export interface villageProps {
  label: string;
  value: string;
}

interface SelectInputProps {
  options: OptionProps[];
  placeholder?: string;
  name: string;
  values: valuesProps;
  addVillageHandler?: (village: villageProps) => void;
}

export default function SelectInput({ ...props }: SelectInputProps) {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={styles.select}>
      <Select
        className="select-container"
        classNamePrefix="select"
        options={props.options}
        onChange={(option) => helpers.setValue(option?.value)}
        name={field.name}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? <TextError>{meta.error}</TextError> : null}
    </div>
  );
}

export const CustomSelectInput: React.FC<SelectInputProps> = (props) => {
  const [field, meta, helpers] = useField(props);

  // console.log('props===========', props);

  return (
    <div className={styles.select}>
      <Select
        className="select-container"
        classNamePrefix="select"
        options={props.options}
        onChange={(option) => {
          if (option) {
            helpers.setValue(option.value);
            props.addVillageHandler!(option);
          }
        }}
        name={field.name}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? <TextError>{meta.error}</TextError> : null}
    </div>
  );
};
