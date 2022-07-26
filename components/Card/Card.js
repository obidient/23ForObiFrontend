import styles from './Styles.module.scss';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import StateProgress from '../misc/StateProgress';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import village_img_1 from '../../assets/village_img_1.png';
import village_img_2 from '../../assets/village_img_2.png';
import village_img_3 from '../../assets/village_img_3.png';
import village_img_4 from '../../assets/village_img_4.png';
import village_img_5 from '../../assets/village_img_5.png';

const Card = ({
  state,
  progress,
  voteControl,
  type,
  village,
  slug,
  contributors,
  votes,
  voters,
  id,
}) => {
  // const stateSlug = state?.split(' ').slice(0, -1).join(' ').toLowerCase();

  const router = useRouter();
  const path = router.asPath;

  // console.log(slug);

  return (
    <Link
      href={
        type === 'control'
          ? `states/${slug.toLowerCase()}`
          : `${path}/${village}`
      }
    >
      <div className={styles.card}>
        <div className={styles.state}>
          <div className={styles.card_top}>
            <h5>{type === 'control' ? `${state.state_name}` : village}</h5>
            <div className={styles.chevron}>
              <BsChevronRight />
            </div>
          </div>
        </div>

        <div className={styles.progress}>
          <p>Progress</p>
          <StateProgress progress={progress} />
          <div className={styles.percent}>
            <p>{progress}%</p>
            <p>{voters ? `( ${voters} votes guaranteed )` : ''}</p>
            <p>100%</p>
          </div>
        </div>
        {type === 'control' ? (
          <div className={styles.control}>
            <p>Vote control: </p>
            <p>
              {voteControl}% {votes}
            </p>
          </div>
        ) : (
          <>
            <p className="my-3 font-medium">
              {contributors > 0 ? 'Delivered By' : ''}
            </p>
            {type === 'contributor' && (
              <div className={styles.contributors_img}>
                <Image src={village_img_1} />
                <Image src={village_img_2} />
                <Image src={village_img_3} />
                <Image src={village_img_4} />
                <Image src={village_img_5} />
              </div>
            )}
            {type === 'contributorNotIn' && (
              <div className={styles.no_contributor}>
                <p> NIL </p>
              </div>
            )}
          </>
        )}
      </div>
    </Link>
  );
};

export default Card;
