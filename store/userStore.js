import create from 'zustand';
// import axios from 'axios';

const userStore = (set) => ({
  allVillages: [],
  allLga: [],
  addVillages: (villages) => set({ userVillages: villages }),
  addLga: (lga) => set({ userLga: lga }),
  //   removeUser: () => set({ userProfile: null }),
  //   addAdminUser: (admin) => set({ adminUser: admin }),
  //   removeAdminUser: () => set({ adminUser: null }),
});

const useUserStore = create(userStore, { name: 'user' });

export default useUserStore;
