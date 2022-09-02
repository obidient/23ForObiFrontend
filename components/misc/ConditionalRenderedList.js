import styles from './Styles.module.scss'
import { useState, useEffect, useRef } from 'react';
import useUserStore from './../../store/userStore';
import axios from 'axios';

const ConditionalRenderedList = ({
  value,
  location,
  setValue,
  toggle,
  setSelectedLocation,
  setToggle,
  setIsVillageEmpty,
  type,
  setLgaClicked,
}) => {
  const others = {
    id: 999,
    name: 'Others',
  };

  const addVillage = [
    {
      id: 999,
      name: 'Add first village',
    },
  ];

  const [locationList, setLocationList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const { addVillages } = useUserStore();

  // console.log(type);

  useEffect(() => {
    const newList = async () => {
      // setLocationList(type == 'lga' ? location : location?.concat(others));
      if (type == 'lga') {
        setLocationList(location);
      } else {
        setLocationList(location?.length > 0 ? location?.concat(others) : location);
      }
  }  
      newList();
    
  }, [location]);

  // console.log(location)
  useEffect(() => {
    // if (villageList === undefined) {
    //   setIsVillageEmpty(true)
    // } else {
    //   setIsVillageEmpty(false);
    // }
  }, [locationList]);

  const itemsList =
    locationList &&
    locationList.map((villageItems) => {
      const itemsss = {
        name: villageItems.name,
        value: villageItems.id,
      };
      return itemsss;
    });

  const handleClick = async (item) => {
    setToggle(false);
    setValue(item.name);
    setSelectedLocation(item);
    setIsClicked(!isClicked);
    // console.log(item)

    if(type == "lga") {
    await axios
      .get(`https://api.23forobi.com/villages-in-lga/${item.value}`)
      .then((result) => {
        const res = result.data;
        addVillages(res);
        // console.log(res);
        return res;
      });
    }
  };

  useEffect(() => {
    // console.log(isClicked);
    if(type == "lga") {
      isClicked == true || false ? setLgaClicked(true) : null;
    }

  }, [isClicked]);

  if (value) {
    const filteredVillages = itemsList?.filter((item) =>
      item.name.toString().toLowerCase().startsWith(value.toLowerCase())
    );

    if (filteredVillages?.length) {
      return (
        toggle && (
          <div
            className={`${styles.village_dropdown} ${type == 'village' ? styles.village_dropdown_village : ""}`}
          >
            {filteredVillages?.map((item) => (
              <div
                onClick={() => handleClick(item)}
                className={styles.dropdown_item}
              >
                {item.name}
              </div>
            ))}
          </div>
        )
      );
    }
    return (
      <div className={`${styles.not_found} ${type == 'village' ? styles.village_dropdown_village : ""}`}>
        <div className={styles.dropdown_item}>
          <p>Not Found</p>
        </div>
      </div>
    );
  }

  return (
    toggle && (
      <div className={`${styles.village_dropdown} ${type == 'village' ? styles.village_dropdown_village : ""}`}>
        {itemsList?.map((item) => (
          <div
            onClick={() => handleClick(item)}
            className={styles.dropdown_item}
          >
            {item.name}
          </div>
        ))}
      </div>
    )
  );
};
export default ConditionalRenderedList