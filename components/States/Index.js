import styles from './Styles.module.scss';
import search from '../../assets/search.png';
import Image from 'next/image';
import Cards from '../Card/Cards';
import STATES from '../../data/stateDetails';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const States = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [states, setStates] = useState(STATES);
  const [searchParam] = useState(['name']);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setStates(STATES);
  }, []);

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
            <input
              type="text"
              placeholder="Search state here"
              value={searchQuery}
              onChange={handleChange}
            />
            <div className={styles.heading__search_icon}>
              <Image src={search} alt="search" />
            </div>
          </div>
        </div>
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
            <h2>No results found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default States;
