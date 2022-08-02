import create from 'zustand';
import { persist } from 'zustand/middleware';
// import axios from 'axios';

const authStore = (set) => ({
  userProfile: null,
  allUsers: [],
  addUser: (user) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
});

const useAuthStore = create(persist(authStore, { name: 'auth' }));

export default useAuthStore;
