import styles from '../admin.module.scss';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNav from '../../../components/Admin/AdminNav';
import AdminPage from '../../../components/Admin/AdminPage';

import VillageList from '../../../components/Admin/VillageList';

const villages = () => (

  <AdminPage>
      <div className={styles.admin}>
      <div className={styles.admin__dashboard}>  
          <div className={styles.nav}>
              <AdminNav />
          </div>
          <div className={styles.list}>
              <VillageList />
          </div>
      </div>
    </div>
  </AdminPage>
);
 

export default villages;
