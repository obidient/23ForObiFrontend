import styles from './Styles.module.scss';
import search from '../../assets/search.png';
import Image from 'next/image';
import Cards from '../Card/Cards';

const States = () => {
  return (
    <div className={styles.states}>
      <div className="container">
        <div className={styles.heading}>
          <h2>States</h2>
          <div className={styles.heading__input}>
            <input type="text" placeholder="Search state here" />
            <div className={styles.heading__search_icon}>
              <Image src={search} alt="search" />
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default States;
