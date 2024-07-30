import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist, createJSONStorage} from 'zustand/middleware';

interface UserState {
  selectedId: number | null;

  setSelectedId: (user: number) => void;
}

export const useEditTodosStore = create<UserState>()(
  persist(
    set => ({
      selectedId: null,
      setSelectedId: id => {
        set({
          selectedId: id,
        });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
