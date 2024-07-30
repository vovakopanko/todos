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

class AccountService {
  async emailSignIn({email, password}: EmailSignIn) {
    return axios.post('/login', {
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
  }: EmailSignUp) {
    return axios.post('/register', {
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
