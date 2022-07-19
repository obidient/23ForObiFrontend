import Sidebar from './Sidebar';
import styles from './Styles.module.scss';
import {MdMenuOpen} from 'react-icons/md'
import { useState } from 'react';

const AdminPage = ({ title, description, children }) => {
//   const editTitle = title?.includes(undefined) ? 'loading...' : title;
  const [toggle, setToggle] = useState(true)

  return (
    <div className={styles.admin_page}>
        <div 
            className={`${
                toggle
                ? `${styles.admin_page__sidebar} ${styles.close}`
                : `${styles.admin_page__sidebar} ${styles.open}`
            }`}
          >
            <Sidebar />
        </div>
        <button className={styles.toggle} onClick={() => setToggle(!toggle)}>
          <MdMenuOpen className="text-5xl"/>
        </button>
      {children}
    </div>
  );
};

export default AdminPage;
