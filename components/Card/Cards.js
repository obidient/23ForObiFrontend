import styles from './Styles.module.scss';
import Card from './Card';
import Link from 'next/link';

const Cards = ({ slug }) => {
  const state = 'Abia State';
  return (
    <div className={styles.cards}>
      {/* <Link href={`/${state}`}> */}
      <Card
        progress={10}
        voteControl={20}
        type="control"
        state={state}
        slug={`/${state}`}
      />
      {/* </Link> */}

      <Card
        state={'Adamawa State'}
        progress={60}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Akwa Ibom State'}
        progress={10}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Anambra State'}
        progress={20}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Bauchi State'}
        progress={20}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Bayelsa State'}
        progress={20}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Benue State'}
        progress={20}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Borno State'}
        progress={100}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Cross River State'}
        progress={10}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Delta State'}
        progress={10}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Ebonyi State'}
        progress={10}
        voteControl={20}
        type="control"
      />
      <Card state={'Edo State'} progress={10} voteControl={20} type="control" />
      <Card
        state={'Ekiti State'}
        progress={15}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Enugu State'}
        progress={10}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Gombe State'}
        progress={20}
        voteControl={20}
        type="control"
      />
      <Card state={'Imo State'} progress={10} voteControl={20} type="control" />
      <Card
        state={'Jigawa State'}
        progress={20}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Kaduna State'}
        progress={40}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Kano State'}
        progress={40}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Katsina State'}
        progress={100}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Kebbi State'}
        progress={10}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Kwara State'}
        progress={10}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Lagos State'}
        progress={10}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Nasarawa State'}
        progress={25}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Niger State'}
        progress={30}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Ogun State'}
        progress={30}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Ondo State'}
        progress={30}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Osun State'}
        progress={10}
        voteControl={20}
        type="control"
      />
      <Card state={'Oyo State'} progress={10} voteControl={20} type="control" />
      <Card
        state={'Plateau State'}
        progress={10}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Rivers State'}
        progress={100}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Sokoto State'}
        progress={25}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Taraba State'}
        progress={40}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Yobe State'}
        progress={30}
        voteControl={20}
        type="control"
      />
      <Card
        state={'Zamfara State'}
        progress={100}
        voteControl={20}
        type="control"
      />
      <Card state={'FCT Abuja'} progress={10} voteControl={20} type="control" />
    </div>
  );
};

export default Cards;
