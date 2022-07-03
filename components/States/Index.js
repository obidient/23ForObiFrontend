import styles from './Styles.module.scss';
import search from '../../assets/search.png';
import Image from 'next/image';
import Cards from '../Card/Cards';

const States = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [states, setStates] = useState(STATES);
  const [searchParam] = useState(['name']);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

 

  const filter = (states) => {
    return states.filter((state) => {
      return searchParam.some((newState) => {
        return (
          state[newState]
            .toString()
            .toLowerCase()
            .indexOf(searchQuery.toLowerCase()) > -1
        );
      });
    });
  };

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
<<<<<<< HEAD
        <div className={styles.cards}>
          <Cards />
=======
        <div className='cards'>
          {states && states.length > 0 ? (
            filter(states).map((item) => (
              <Card
                key={item.id}
                state={item.name}
                voteControl={item.voteControl}
                type={item.type}
                progress={item.progress}
                slug={item.slug}
              />
            ))
          ) : (
            <h2 className='text-lg'>No State exists</h2>
          )}
>>>>>>> e77b2d437e1f481abe67d4f57344939611e333a3
        </div>
      </div>
    </div>
  );
};

export default States;
