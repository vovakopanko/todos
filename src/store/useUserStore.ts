import {create} from 'zustand';

type userData = {
  first_name: string;
  last_name: string;
  email: string;
};
interface UserState {
  firstName: unknown | null;
  lastName: unknown | null;
  email: unknown | null;
  isLoggedIn: boolean;
  setUser: (user: userData) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>(set => ({
  firstName: null,
  lastName: null,
  email: null,
  isLoggedIn: false,
  setUser: data =>
    set({
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      isLoggedIn: true,
    }),
  clearUser: () =>
    set({firstName: null, lastName: null, email: null, isLoggedIn: false}),
}));
