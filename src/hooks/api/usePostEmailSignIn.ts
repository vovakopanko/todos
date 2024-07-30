import {useState} from 'react';
import {isAxiosError} from 'axios';
import accountServices from '../../services/api/account.services';
import {STORAGE_KEYS} from '../../constants/storage-keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUserStore} from '../../store/useUserStore';

type signInData = {
  email: string;
  password: string;
};

export const usePostEmailSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const setUser = useUserStore(state => state.setUser);

  const emailSignIn = async ({email, password}: signInData) => {
    setIsLoading(true);
    try {
      const data = await accountServices.emailSignIn({email, password});
      await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.data.access);

      setUser({
        user: {
          firstName: 'Not_Data',
          lastName: 'Not_Data',
          email: 'Not_Data@gmail.com',
        },
        isLoggedIn: true,
      });
    } catch (e) {
      if (isAxiosError(e)) {
        if (e.response?.data.NO_PROPERTY_RELATED) {
          console.log(e.response?.data.NO_PROPERTY_RELATED[0]);
        }
        setError(e.response?.data.detail);
        console.log('Error', e.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    emailSignIn,
    setError,
  };
};
