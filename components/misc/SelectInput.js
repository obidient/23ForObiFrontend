import styles from './Styles.module.scss';
import caret_down from '../../assets/caret_down.png';
import Image from 'next/image';
import { useContext, useState, useEffect, useRef, useCallback } from 'react';
import VillageContext from '../../Context/villageContext';
import useVillage from '../../Context/villageContext';
import StateContext from './../../Context/StateContext';
import useUserStore from './../../store/userStore';
import { getVillage } from './../../adapters/requests/index';
import axios from 'axios'

const SelectInput = ({placeholder, state, setStateId, setIsVillageEmpty, setStateClicked}) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  
  const { userVillages } = useUserStore();
  console.log(userVillages)
  
  const { states } = useContext(StateContext);


  //CLOSE SELECT ON OUTER CLICK
  const selectRef = useRef();

  useEffect(() => {
    if (Array.isArray(userVillages)) {
      setIsVillageEmpty(true);
    } else {
      setIsVillageEmpty(false);

    }


  }, [userVillages]);

  useEffect(() => {
    //  add when mounted
    document.addEventListener('mousedown', handleClose);

    //  clean on unmount
    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  }, []);

  const handleClose = useCallback((e) => {
    // // clicked inside the select
    if (selectRef?.current?.contains(e.target)) {
      return;
    }
    // outside the select
    setIsDropDownVisible(false);

  }, []);

  const { addVillages } = useUserStore();
  

  const [itemsList, setItemsList] = useState(state?.map((state) =>  {
      const itemsss = 
        {
          name: state.state_name,
          value: state.id,
        }
        return itemsss
    }
  ));

  // console.log(itemsList);
  const [selectedItemIndex, setSelectedItemsIndex] = useState(null);

  // const { villages, setVillages } = useContext(VillageContext);

  const { villages, addVillage, removeVillage } = useVillage();
  const [villageState, setVillageState] = useState([villages]);

  //State
  const [isInVillages, setIsInVillages] = useState(false);

  useEffect(() => {
    const villageIsInVillages = villages.find(
      (village) => village === itemsList[selectedItemIndex]?.name
    );
    
    setStateId(itemsList[selectedItemIndex]?.value);

    selectedItemIndex === null
      ? setStateClicked(false)
      : setStateClicked(true);
    // if (!villageIsInVillages) {
    //   addVillage(itemsList[selectedItemIndex]?.name || villages);
    //   setIsInVillages(false);
    // } else {
    //   setIsInVillages(true);
    // }

    // console.log(villageState);
  }, [selectedItemIndex]);

  const handleClick = async(index, item) => {
    
    setSelectedItemsIndex(index);
    setIsDropDownVisible(!isDropDownVisible);
    axios.get(`https://api.23forobi.com/villages/${item.value}`).then(result => {
          const res = result.data
          addVillages(res)
          
          // console.log(res)
          return res
      });
    // console.log(stateVillages);
  };

  return (
    <div>
      <div className={styles.dropdown} ref={selectRef}>
        <div
          className={`${styles.dropdown__selection} ${
            isDropDownVisible ? styles.visible : ''
          }`}
          onClick={(e) => {
            setIsDropDownVisible(!isDropDownVisible);
          }}
        >
          {' '}
          <p>
            {selectedItemIndex !== null
              ? itemsList[selectedItemIndex].name
              : placeholder}
          </p>
        </div>
        {isDropDownVisible ? (
          <div className={styles.dropdown__item_holder}>
            {itemsList.map((item, index) => {
              return (
                <div
                  className={styles.dropdown_item}
                  key={item.value}
                  onClick={() => handleClick(index, item)}
                >
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
