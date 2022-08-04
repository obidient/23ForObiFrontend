import styles from './Styles.module.scss';
import caret_down from '../../assets/caret_down.png';
import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import VillageContext from '../../Context/villageContext';
import useVillage from '../../Context/villageContext';
import StateContext from '../../Context/StateContext';
import useUserStore from '../../store/userStore';
import { getVillage } from '../../adapters/requests/index';
import axios from 'axios'
import useAuthStore from './../../store/authStore';

const SelectInputVillage = ({ placeholder, state, setSelectedVillage }) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  console.log(state);
  const { states } = useContext(StateContext);

  const { accessToken } = useAuthStore();

  const { userVillages } = useUserStore();

  const villageList = userVillages?.list_of_villages;
  console.log(villageList);

  const itemsList =
    villageList &&
    villageList.map((villageItems) => {
      const itemsss = {
        name: villageItems.name,
        value: villageItems.id,
      };
      return itemsss;
    });

  console.log(itemsList);
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

    // if (!villageIsInVillages) {
    //   addVillage(itemsList[selectedItemIndex]?.name || villages);
    //   setIsInVillages(false);
    // } else {
    //   setIsInVillages(true);
    // }

    // console.log(villageState);
  }, [selectedItemIndex]);

  const handleClick = async (index, item) => {
    setSelectedItemsIndex(index);
    setIsDropDownVisible(!isDropDownVisible);
    setSelectedVillage(item);
  };

  return (
    <div>
      <div className={styles.dropdown}>
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
            {itemsList?.map((item, index) => {
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

export default SelectInputVillage;
