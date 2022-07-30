import Sidebar from './Sidebar';
import styles from './Styles.module.scss';
import { MdMenuOpen } from 'react-icons/md';
import { useState } from 'react';
import AdminNav from './AdminNav';

const AdminPage = ({ title, description, children }) => {
  //   const editTitle = title?.includes(undefined) ? 'loading...' : title;
  const [toggle, setToggle] = useState(true);

  return (
    <div className='h-full'>
      <main className={styles.admin_page}>
        <Sidebar />
        <div>
          <AdminNav />
          <div>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
