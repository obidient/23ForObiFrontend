import React from 'react'
import Sidebar from '../../../../components/Admin/Sidebar';
import styles from './Styles.module.scss'
import village_img_3 from '../../../../assets/village_img_3.png'
import Image from 'next/image';

const user = () => {
  return (
    <div className={styles.user}>
      <div className={styles.user__sidebar}>
        <Sidebar />
        
      </div>
      <div className={styles.user__main}>

        <div className={styles.user_info}>
          <div className={styles.username}>
            <Image src={village_img_3} />
            <p>John Doe</p>
          </div>
          <div className={styles.location}>
            <h3>Location</h3>
            <h4>State:</h4> <p>Lagos</p>
            <h4>Village:</h4> <p>Awori</p>
          </div>
          <div className={styles.date_reg}>
            <h3>Date Reigistered</h3>
            <p>2 July</p>
          </div>
        </div>
        <div className={styles.edit}>
          <form>
            <h2>Edit User</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Village" />
            <input type="text" placeholder="State" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default user