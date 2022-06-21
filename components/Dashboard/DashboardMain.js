import React from 'react';
import styles from './Styles.module.scss';

const DashboardMain = () => {
  return (
    <div className={styles.dashboardmain}>
      <h2>Welcome Sandra</h2>
      <hr />
      <div className={styles.village_control}>
        <div className={styles.village_control__input}>
          <h3>VIllages you have control in</h3>
          <p>Add the villages you have control over within your state.</p>
          <div className={styles.input}>
            <input type="text" placeholder="Select your village" />
          </div>
        </div>
        <div className={styles.village_control__outputs}>
          <div className={styles.output}>
            <p>Eziama village</p> <span>x</span>
          </div>
          <div className={styles.output}>
            <p>Eziama village</p> <span>x</span>
          </div>
          <div className={styles.output}>
            <p>Eziama village</p> <span>x</span>
          </div>
          <div className={styles.output}>
            <p>Eziama village</p> <span>x</span>
          </div>
          <div className={styles.output}>
            <p>Eziama village</p> <span>x</span>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.main_bottom}>
        <div className={styles.main_bottom__contact}>
          <form action="">
            <h5>Specify your key contact</h5>
            <p>
              Specify your key contact information we can always reach you on.
            </p>
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Whatsapp number" />
          </form>
        </div>
        <div className={styles.main_bottom__contributors}>
          <h5>Contributors</h5>
          <p>Add a new contributor</p>
          <div className={styles.contributors_table}></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
