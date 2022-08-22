import styles from './Styles.module.scss';
import caret_down from '../../assets/caret_down.png';
import Image from 'next/image';
import { useState } from 'react';
import village_img_1 from '../../assets/village_img_1.png';
import avatar from '../../assets/avatar.png';
import Link from 'next/link';
import { googleLogout } from '@react-oauth/google';
import { useRouter } from 'next/router';
import useAuthStore from '../../store/authStore';

const DashboardLink = ({ option, name, value, onChange }) => {
  const { removeUser, userProfile } = useAuthStore();
  const first_name = userProfile?.user?.first_name;
  const user_image = userProfile?.user?.google_image_url;

  console.log(userProfile)
  const router = useRouter();
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

  // console.log(itemsList);
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
            <Image
              src={user_image ? user_image : avatar}
              width={35}
              height={35}
            />
            <h2>{first_name}</h2>
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
              <button
                onClick={() => {
                  googleLogout();
                  removeUser();
                }}
              >
                Log-out
              </button>
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
