import {useState} from 'react';
import {isAxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from '../constants/storage-keys';
import {useUserStore} from '../store/useUserStore';

export const usePostLogOut = () => {
  const [isLoading, setIsLoading] = useState(false);

  const clearUser = useUserStore(state => state.clearUser);

  const logOut = async () => {
    setIsLoading(true);

    try {
      clearUser();
      await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, '');
    } catch (e) {
      console.warn('logOut error: ', JSON.stringify(e, null, 2));
      if (isAxiosError(e)) {
        console.log(e.response?.data.NO_PROPERTY_RELATED[0] || e.message);
      } else {
        console.log('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    logOut,
  };
};
