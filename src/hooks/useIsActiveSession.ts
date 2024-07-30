import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {STORAGE_KEYS} from '../constants/storage-keys';
import {useUserStore} from '../store/useUserStore';

export const useIsActiveSession = () => {
  const logIn = useUserStore(state => state.setUser);

  useEffect(() => {
    async function getAccessToken() {
      try {
        const isAccess = await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
        if (isAccess) {
          logIn({});
        }
      } catch (error) {
        console.error('Error checking session:', error);
      }
    }

    getAccessToken();
  }, [logIn]);
};
