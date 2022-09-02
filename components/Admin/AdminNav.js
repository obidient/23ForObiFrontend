import styles from './Styles.module.scss';
import Image from 'next/image';
import village_img_1 from '../../assets/village_img_1.png';
import Link from 'next/link';
import search from '../../assets/search.png';
import notification from '../../assets/notification.png';

const AdminNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div className='mb-7'>
          <div className="flex relative h-[40px] items-center border border-[#1a1717] rounded-full w-[350px] px-0">
            <div className="absolute top-3 left-3">
              <Image src={search} alt="search" />
            </div>
            <input
              type="text"
              placeholder="Search information here"
              className="ml-10 w-10/12 bg-transparent outline-none"
              // value={searchQuery}
              // onChange={handleChange}
            />
          </div>
        </div>
        <div className='mb-7'>
          <div className="flex items-center justify-center cursor-pointer">
            <Image src={notification} alt="notification"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
