import styles from './Styles.module.scss';
import Image from 'next/image';

import status_check from '../../assets/status_check.png';
import caret_down from '../../assets/caret_down.png';

const DashboardMain = () => {
  return (
    <div className={styles.dashboardmain}>
      <h2>Welcome Sandra</h2>
      <hr />
      <div className={styles.village_control}>
        <div className={styles.village_control__input}>
          <h3>VIllages you have control in</h3>
          <p>Add the villages you have control over within your state.</p>
          <div class={styles.input}>
            <select>
              <option selected disabled hidden>
                Select your village
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
            <div className={styles.img}>
              <Image src={caret_down} />
            </div>
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
            <div className={styles.input_field}>
              <input type="text" placeholder="Full name" />
              <input type="text" placeholder="Phone number" />
              <input type="text" placeholder="Whatsapp number" />
            </div>
            <button>Save</button>
          </form>
        </div>
        <div className={styles.main_bottom__contributors}>
          <div className={styles.heading}>
            <h5>Contributors</h5>
            <p>Add a new contributor</p>
          </div>
          <div className={styles.contributors_table}>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Mobile number</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>Okolie Festus</td>
                  <td>07085128680</td>
                  <td>
                    <Image src={status_check} />
                  </td>
                </tr>
                <tr>
                  <td>Okolie Festus</td>
                  <td>07085128680</td>
                  <td>
                    <Image src={status_check} />
                  </td>
                </tr>
                <tr>
                  <td>Okolie Festus</td>
                  <td>07085128680</td>
                  <td>
                    <Image src={status_check} />
                  </td>
                </tr>
                <tr>
                  <td>Okolie Festus</td>
                  <td>07085128680</td>
                  <td>
                    <Image src={status_check} />
                  </td>
                </tr>
                <tr>
                  <td>Okolie Festus</td>
                  <td>07085128680</td>
                  <td>
                    <Image src={status_check} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
