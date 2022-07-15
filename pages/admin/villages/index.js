import styles from '../admin.module.scss';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNav from '../../../components/Admin/AdminNav';

import VillageList from '../../../components/Admin/VillageList';

const villages = () => (
  <div className={styles.admin}>
    <div className={styles.admin__sidebar}>
      <Sidebar />
    </div>
    <div className={styles.admin__dashboard}>  
        <div className={styles.nav}>
            <AdminNav />
        </div>
        <div className={styles.list}>
            <VillageList />
        </div>
    </div>
  </div>
);

export default villages;
