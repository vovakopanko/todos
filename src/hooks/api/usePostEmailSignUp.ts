import {useState} from 'react';
import {isAxiosError} from 'axios';
import accountServices from '../../services/api/account.services';
import {STORAGE_KEYS} from '../../constants/storage-keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUserStore} from '../../store/useUserStore';

type signUpData = {
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
};

type ErrorBody = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
};

export const usePostEmailSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorBody | null>(null);
  const setUser = useUserStore(state => state.setUser);

  const emailSignUp = async ({
    email,
    password,
    password2,
    first_name,
    last_name,
  }: signUpData) => {
    setIsLoading(true);
    try {
      const resp = await accountServices.emailSignUp({
        email,
        password,
        password2,
        first_name,
        last_name,
      });
      if (resp.status === 201) {
        console.log('Resp', resp.data);
        const data = await accountServices.emailSignIn({email, password});
        await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.data.access);
        setUser({user: resp.data.first_name, isLoggedIn: true});
        setUser({
          user: {
            first_name: resp.data.first_name,
            last_name: resp.data.last_name,
            email: resp.data.email,
          },
          isLoggedIn: true,
        });
      }
    } catch (e) {
      if (isAxiosError(e)) {
        if (e.response?.data.NO_PROPERTY_RELATED) {
          console.log(e.response?.data.NO_PROPERTY_RELATED[0]);
        }
        setErrors(e.response?.data);
        console.log('Error', e.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    errors,
    emailSignUp,
    setErrors,
  };
};
