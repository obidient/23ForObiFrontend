import styles from './admin.module.scss';
import Sidebar from './../../components/Admin/Sidebar';
import AdminNav from '../../components/Admin/AdminNav';
import AdminDashboard from './../../components/Admin/AdminDashboard';

const admin = () => (
  <div className={styles.admin}>
    <div className={styles.admin__sidebar}>
      <Sidebar />
    </div>
    <div className={styles.admin__dashboard}>
      <AdminNav />
      <AdminDashboard />
    </div>
  </div>
);

export default admin;
