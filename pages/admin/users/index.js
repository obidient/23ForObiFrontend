import styles from '../admin.module.scss';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNav from '../../../components/Admin/AdminNav';
import UserList from '../../../components/Admin/UsersList';

const users = () => (
  <div className={styles.admin}>
    <div className={styles.admin__sidebar}>
      <Sidebar />
    </div>
    <div className={styles.admin__dashboard}>  
      <div className={styles.nav}>
        <AdminNav />
      </div>
      <div className={styles.list}>
        <UserList />
      </div>
    </div>
  </div>
);

export default users;
