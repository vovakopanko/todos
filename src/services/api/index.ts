import {BASE_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {STORAGE_KEYS} from '../../constants/storage-keys';
import {useUserStore} from '../../store/useUserStore';

export interface GenericResponse {
  success: boolean;
}

export interface GenericSuccessResponse<T = null> extends GenericResponse {
  data: T;
}

export interface GenericFailedResponse<T = null> extends GenericResponse {
  error: T;
}

const axios = Axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Connection: 'close',
  },
});

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Accept = 'application/json';
    }
    return config;
  },
  error => {
    console.warn('Error', error);
    throw error;
  },
);

export type TokenRefresh = {
  refresh: string;
  access?: string;
};

export const refreshTokenRequest = async (refresh: TokenRefresh) => {
  try {
    const res = await axios.post<TokenRefresh>('/token/refresh/', {
      refresh,
    });
    return res.data.access;
  } catch (e) {
    console.log(e);
  }
};

export const setAccessToken = async (accessToken: string) => {
  await AsyncStorage.setItem('accessToken', accessToken);
};

async function refreshToken() {
  const refresh = await getRefreshToken();
  if (refresh) {
    const accessToken = await refreshTokenRequest({refresh});

    if (accessToken) {
      await setAccessToken(accessToken);
    }
    return accessToken;
  }
}

export const getRefreshToken = async (): Promise<string | null> =>
  await AsyncStorage.getItem('refreshToken');

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      useUserStore.getState().clearUser();
      await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, '');
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshToken();
        originalRequest.headers.Authorization = `${newAccessToken}`;
      } catch (e) {
        console.warn('Error update token', e);
        await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, '');
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  },
);

export {axios};
