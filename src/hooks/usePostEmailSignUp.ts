import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {isAxiosError} from 'axios';
import {ROUTES} from '../navigation/constants';
import accountServices, {EmailSignUp} from '../services/api/account.services';

type EmailSignUpFormData = Omit<EmailSignUp, 'deviceToken'>;

export const usePostEmailSignUp = () => {
  const {navigate} = useNavigation<any>();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null);

  const emailSignUp = async ({
    email,
    password,
    password2,
    first_name,
    last_name,
  }: EmailSignUpFormData) => {
    setIsLoading(true);

    try {
      const res = await accountServices.emailSignUp({
        email,
        password,
        password2,
        first_name,
        last_name,
      });
      if (res.status === 200) {
        navigate(ROUTES.HOME);
      }
    } catch (e) {
      console.warn('emailSignUp error: ', e);
      if (isAxiosError(e)) {
        if (e.response?.data.NO_PROPERTY_RELATED) {
          setErrors(e.response?.data.NO_PROPERTY_RELATED);
          console.log(e.response?.data.NO_PROPERTY_RELATED[0]);
        }
      } else {
        console.log('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    errors,
    emailSignUp,
  };
};
