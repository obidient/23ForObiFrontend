export const VillageContextProvider = ({ children }) => {
  const [village, setVillage] = useState(null);

  return (
    <VillageContext.Provider value="hi">{children}</VillageContext.Provider>
  );
};
