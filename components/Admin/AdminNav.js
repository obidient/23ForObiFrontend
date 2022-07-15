import styles from './Styles.module.scss';
import Image from 'next/image';
import village_img_1 from '../../assets/village_img_1.png';
import Link from 'next/link';

const AdminNav = () => {
  return (
    <nav className={styles.admin_nav}>
      <div className={styles.title}>
        <h2>Admin Dashboard</h2>
      </div>
      <div className={styles.navigate}>
        <Link href="#">
          <div className={styles.img}>
            <Image src={village_img_1} />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default AdminNav;
