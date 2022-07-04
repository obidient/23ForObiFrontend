import styles from './Styles.module.scss';
import Card from './Card';
import Link from 'next/link';
import STATES from '../../data/stateDetails';
import VILLAGE from '../../data/villageDetails';
const Cards = ({ slug }) => {
  // const state = 'Abia State';

  return (
    <div className={styles.cards}>
      {STATES.map((item) => (
        <Card
          key={item.id}
          state={item.name}
          voteControl={item.voteControl}
          type={item.type}
          progress={item.progress}
        />
      ))}
    </div>
  );
};

export default Cards;

export const VillageCards = ({ slug }) => {
  // const state = 'Abia State';

  return (
    <div className={styles.cards}>
      {VILLAGE.map((item) => (
        <Card
          key={item.id}
          village={item.name}
          type={item.type}
          progress={item.progress}
          contributors={item.contributors}
        />
      ))}
    </div>
  );
};
