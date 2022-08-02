import Image from 'next/image';
import Link from 'next/link';
import styles from './Styles.module.scss';
import add_img_green from '../../assets/add_img_green.png';
import VillageStat from './VillageStat';

const VillageDetails = ({ src, linkedIn, name, position, description }) => {
  return (
    <div className={styles.village_details}>
      <div className={styles.village_details__stats}>
        <VillageStat />
      </div>
      <hr />
      <div className={styles.village_details__heading}>
        <h2>Voters</h2>
        <div className={styles.dashboardmain_add_village}>
          <Image src={add_img_green} />
          <p>Add a vote you will deliver</p>
        </div>
      </div>
      <div className={styles.village_details__table}>
        <table>
          <tr>
            <th>S/N</th>
            <th>VOTERS NAME</th>
            <th>MOBILE NUMBER</th>
            <th>ACTION</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Okoli Felistus</td>
            <td>+234 8099356901</td>
            <td>
              <Link href="#">Edit</Link>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Okoli Felistus</td>
            <td>+234 8099356901</td>
            <td>
              <Link href="#">Edit</Link>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Okoli Felistus</td>
            <td>+234 8099356901</td>
            <td>
              <Link href="#">Edit</Link>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Okoli Felistus</td>
            <td>+234 8099356901</td>
            <td>
              <Link href="#">Edit</Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default VillageDetails;
