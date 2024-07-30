import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist, createJSONStorage} from 'zustand/middleware';

type UserData = {
  first_name: string;
  last_name: string;
  email: string;
};

interface UserState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  isLoggedIn: boolean;
  setUser: (user: UserData) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    set => ({
      firstName: null,
      lastName: null,
      email: null,
      isLoggedIn: false,
      setUser: data => {
        set({
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          isLoggedIn: true,
        });
      },
      clearUser: () => {
        set({
          firstName: null,
          lastName: null,
          email: null,
          isLoggedIn: false,
        });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
