import {AxiosResponse} from 'axios';
import {axios} from '.';

export type EmailSignIn = {
  email: string;
  password: string;
};

export type EmailSignUp = {
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
};

type ResponseSignUp = {
  email: string;
  first_name: string;
  last_name: string;
};

type ResponseSignIn = {
  access: string;
  refresh: string;
};

class AccountService {
  async emailSignIn({
    email,
    password,
  }: EmailSignIn): Promise<AxiosResponse<ResponseSignIn>> {
    return axios.post('/login/', {
      email,
      password,
    });
  }

  async emailSignUp({
    email,
    password,
    password2,
    first_name,
    last_name,
  }: EmailSignUp): Promise<AxiosResponse<ResponseSignUp>> {
    return axios.post('/register/', {
      email,
      password,
      password2,
      first_name,
      last_name,
    });
  }

  async logOut() {}
}

export default new AccountService();
