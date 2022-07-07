// import {
//   createContext,
//   useState,
//   useEffect,
//   useReducer,
//   useContext,
// } from 'react';

import { useState, createContext, useMemo } from 'react';

export const countryContext = createContext();

export const CountryContextProvider = ({ children, initialData }) => {
  const [data, setData] = useState(initialData);

  //   const [state, dispatch] = useReducer(villageReducer, initialState);

  const value = useMemo(() => ({ data, setData }), [data]);

  return (
    <countryContext.Provider value={value}>{children}</countryContext.Provider>
  );
};

// const useVillage = () => {
//   const context = useContext(VillageContext);

//   if (context === undefined) {
//     throw new Error('useVillage must be used within villageContxt');
//   }
//   return context;
// };

// export default useVillage;
