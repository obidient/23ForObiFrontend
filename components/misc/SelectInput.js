import styles from './Styles.module.scss';
import caret_down from '../../assets/caret_down.png';
import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import VillageContext from '../../Context/villageContext';
import useVillage from '../../Context/villageContext';

const SelectInput = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  //dropdown items
  const [itemsList, setItemsList] = useState([
    {
      name: 'Ezeani Village',
      value: 'Ezeani Village 1',
    },
    {
      name: 'Osusu Village',
      value: 'Osusus Village 2',
    },
    {
      name: 'Ariara Village',
      value: 'Ariara Village 3',
    },
  ]);

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

    if (!villageIsInVillages) {
      addVillage(itemsList[selectedItemIndex]?.name || villages);
      setIsInVillages(false);
    } else {
      setIsInVillages(true);
    }

    console.log(villageState);
  }, [selectedItemIndex]);

  const handleClick = (index) => {
    setSelectedItemsIndex(index);
    setIsDropDownVisible(!isDropDownVisible);
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
              : 'Select'}
          </p>
        </div>
        {isDropDownVisible ? (
          <div className={styles.dropdown__item_holder}>
            {itemsList.map((item, index) => {
              return (
                <div
                  className={styles.dropdown_item}
                  key={item.value}
                  onClick={() => handleClick(index)}
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
