import create from 'zustand';
// import axios from 'axios';

const userStore = (set) => ({
//   addVillages: '',
  //   addVillages: null,
  allVillages: [],
  //   allStateVillages: [],
  addVillages: (villages) => set({ userVillages: villages }),
  //   removeUser: () => set({ userProfile: null }),
  //   addAdminUser: (admin) => set({ adminUser: admin }),
  //   removeAdminUser: () => set({ adminUser: null }),
});

const useUserStore = create(userStore, { name: 'user' });

export default useUserStore;
