import styles from './Styles.module.scss';
import search from '../../assets/search.png';
import Image from 'next/image';
import Cards from '../Card/Cards';
import STATES from '../../data/stateDetails';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import StateContext from '../../Context/StateContext';

const States = () => {
  const { states } = React.useContext(StateContext);
  // console.log(JSON.stringify(states, null, 2));
  const [searchQuery, setSearchQuery] = useState('');
  // const [states, setStates] = useState(STATES);
  const [searchParam] = useState(['state_name']);



  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const filter = (states) => {
    return states.filter((state) => {
      return searchParam.some((newState) => {
        return (
          state[newState]
            ?.toString()
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
          {/*<h2>States</h2>*/}
          <h2>States we are working in</h2>
          <div className={styles.heading__input}>
            <input
              type="text"
              placeholder="Search state here"
              value={searchQuery}
              onChange={handleChange}
            />
            <div className={styles.heading__search_icon}>
              <Image src={search} alt="search" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="cards">
          {states && states.length > 0 ? (
            filter(states).map((item) => (
              <Card
                key={item.id}
                state={item}
                voteControl={item.vote_control}
                type={'control'}
                progress={item.progress}
                slug={item.id}
              />
            ))
          ) : (
            <h2 className="text-4xl font-bold">No State exists</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default States;
