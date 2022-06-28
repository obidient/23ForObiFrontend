import {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext,
} from 'react';
import villageReducer, {
  initialState,
} from './../components/Reducer/villageReducer';

const VillageContext = createContext(initialState);

export const VillageContextProvider = ({ children }) => {
  //   const [villages, setVillages] = useState(['game']);

  const [state, dispatch] = useReducer(villageReducer, initialState);

  const addVillage = (village) => {
    const updatedVillage = state.villages.concat(village);
    dispatch({
      type: 'ADD_VILLAGE',
      payload: {
        villages: updatedVillage,
      },
    });
  };

  const removeVillage = (village) => {
    const updatedVillage = state.villages.filter(
      (currentVillage) => currentVillage !== village
    );
    dispatch({
      type: 'REMOVE_VILLAGE',
      payload: {
        villages: updatedVillage,
      },
    });
  };

  const value = {
    addVillage,
    removeVillage,
    villages: state.villages,
  };
  return (
    <VillageContext.Provider value={value}>{children}</VillageContext.Provider>
  );
};

const useVillage = () => {
  const context = useContext(VillageContext);

  if (context === undefined) {
    throw new Error('useVillage must be used within villageContxt');
  }
  return context;
};

export default useVillage;
