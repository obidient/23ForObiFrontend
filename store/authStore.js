import create from 'zustand';
import { persist } from 'zustand/middleware';
// import axios from 'axios';

const authStore = (set) => ({
  accessToken: null,
  userProfile: null,
  registeredUser: null,
  adminUser: null,
  allUsers: [],
  registerUser: (newUser) => set({registeredUser: newUser}),
  addUser: (user) => set({ userProfile: user }),
  addUserAuth: (user) => set({ accessToken: user }),
  removeUser: () => set({ userProfile: null, accessToken: null, registerUser: null }),
  addAdminUser: (admin) => set({ adminUser: admin }),
  removeAdminUser: () => set({ adminUser: null }),
});

const useAuthStore = create(persist(authStore, { name: 'auth' }));

export default useAuthStore;
