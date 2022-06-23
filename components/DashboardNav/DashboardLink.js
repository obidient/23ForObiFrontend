import styles from './Styles.module.scss';
import caret_down from '../../assets/caret_down.png';
import Image from 'next/image';
import { useState } from 'react';
import village_img_1 from '../../assets/village_img_1.png';
import Link from 'next/link';

const DashboardLink = ({ option, name, value, onChange }) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  //dropdown items
  const [itemsList, setItemsList] = useState([
    {
      name: 'Ezeani Village',
      value: 'Ezeani Village 1',
    },
    {
      name: 'Ezeani Village',
      value: 'Ezeani Village 2',
    },
    {
      name: 'Ezeani Village',
      value: 'Ezeani Village 3',
    },
    // {
    //   name: 'Ezeani Village',
    //   value: 'Ezeani Village',
    // },
  ]);

  console.log(itemsList);
  const [selectedItemIndex, setSelectedItemsIndex] = useState(null);

  return (
    <div>
      <div className={styles.dropdown}>
        <div
          className={`${styles.dropdown__selection} ${
            isDropDownVisible ? styles.visible : ''
          }`}
          onClick={(e) => {
            setIsDropDownVisible(!isDropDownVisible);
          }}
        >
          <div className={styles.profile__user_img}>
            <Image src={village_img_1} />
          </div>
        </div>
        {isDropDownVisible ? (
          <div className={styles.dropdown__item_holder}>
            <div className={styles.dropdown_item}>
              <Link href="/dashboard">Dashboard</Link>
            </div>
            <div className={styles.dropdown_item}>
              <Link href="/dashboard/profile">Profile</Link>
            </div>
            <div className={styles.dropdown_item}>
              <Link href="logout">Log-out</Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DashboardLink;
