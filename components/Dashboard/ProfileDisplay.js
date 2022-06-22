import Image from 'next/image';
import styles from './Styles.module.scss';
import avatar from '../../assets/avatar.png';
import SelectInput from './../misc/SelectInput';

const ProfileDisplay = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Image src={avatar} />
        <p>edit image</p>
      </div>
      <div className={styles.form}>
        <form>
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <SelectInput
            option="Select a village"
            name="village"
            value
            onChange
          />
          <SelectInput
            option="Select a village"
            name="village"
            value
            onChange
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDisplay;
