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

const Card = ({ state, progress, voteControl, type, village, slug }) => {
  // const stateSlug = state?.split(' ').slice(0, -1).join(' ').toLowerCase();

  const router = useRouter();
  const path = router.asPath;
  // console.log(router);

  return (
    <div className={styles.card}>
      <div className={styles.state}>
        <Link
          href={type === 'control' ? `states/${slug}` : `${path}/${village}`}
        >
          <div className={styles.card_top}>
            <h5>{type === 'control' ? `${state} State` : village}</h5>
            <div className={styles.chevron}>
              <BsChevronRight />
            </div>
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
        <>
          <p className="my-3 font-medium">Top 5 Contributors</p>
          {
            (type = 'contributor' && (
              <div className={styles.contributors_img}>
                <Image src={village_img_1} />
                <Image src={village_img_2} />
                <Image src={village_img_3} />
                <Image src={village_img_4} />
                <Image src={village_img_5} />
              </div>
            ))
          }
        </>
      )}
    </div>
  );
};

export default Card;
