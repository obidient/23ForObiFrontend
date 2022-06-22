import styles from './Styles.module.scss';
import caret_down from '../../assets/caret_down.png';
import Image from 'next/image';

const SelectInput = ({ option, name, value, onChange }) => {
  return (
    <div>
      <div class={styles.input}>
        <select name={name} value={value} onChange={onChange}>
          <option selected disabled>
            {option}
          </option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>
        <div className={styles.img}>
          <Image src={caret_down} />
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
