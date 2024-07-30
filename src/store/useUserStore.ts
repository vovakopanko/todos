import {create} from 'zustand';

interface UserState {
  user: unknown | null;
  isLoggedIn: boolean;
  setUser: (user: unknown) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>(set => ({
  user: null,
  isLoggedIn: false,
  setUser: user => set({user, isLoggedIn: true}),
  clearUser: () => set({user: null, isLoggedIn: false}),
}));
