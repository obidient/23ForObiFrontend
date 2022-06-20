import styles from './Styles.module.scss';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import StateProgress from '../misc/StateProgress';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Card = ({ state, progress, voteControl, type, village }) => {
  const stateSlug = state?.split(' ').slice(0, -1).join(' ').toLowerCase();

  const router = useRouter();
  const path = router.asPath;
  console.log(router);

  return (
    <div className={styles.card}>
      <div className={styles.state}>
        <h5>{type === 'control' ? state : village}</h5>
        <Link href={type === 'control' ? `${stateSlug}` : `${path}/${village}`}>
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
