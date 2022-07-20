import React from 'react'
import Sidebar from '../../../../components/Admin/Sidebar';
import AdminPage from '../../../../components/Admin/AdminPage';
import styles from './Styles.module.scss'
import village_img_3 from '../../../../assets/village_img_3.png'
import Image from 'next/image';

const village = () => {
  return (
    <AdminPage>
      <div className={styles.user}>
        <div className={styles.user__main}>
          
          <div className={styles.user_info}>
            <div className={styles.username}>            
              <h2>Lagos</h2>
            </div>
            <div className={styles.location}>
              <h3>Location</h3>
              <h4>State:</h4> <p>Lagos</p>
            </div>
            <div className={styles.date_reg}>
              <h3>Progress</h3>
              <p>50%</p>
            </div>
          </div>
          <div className={styles.edit}>
            <form>
              <h2>Edit Village</h2>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="State" />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </AdminPage>
  );
}

export default village