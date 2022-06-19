import styles from './Styles.module.scss';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import StateProgress from '../misc/StateProgress';
import Link from 'next/link';

const Card = ({ state, progress, voteControl, type }) => {
  const stateSlug = state?.split(' ').slice(0, -1).join(' ').toLowerCase();
  return (
    <div className={styles.card}>
      <div className={styles.state}>
        <h5>{state}</h5>
        <Link
          href={type === 'control' ? `${stateSlug}` : `${stateSlug}/ezenzwa`}
        >
          <div className={styles.chevron}>
            <BsChevronRight />
          </div>
        </Link>
      </div>
      <div className={styles.progress}>
        <p>Progress</p>
        <StateProgress progress={progress} />
        <div className={styles.percent}>
          <p>{progress}%</p>
          <p>100%</p>
        </div>
      </div>
      {type === 'control' ? (
        <div className={styles.control}>
          <p>Vote control: </p>
          <p>{voteControl}%</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Card;
