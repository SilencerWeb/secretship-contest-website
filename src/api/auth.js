import axios from 'axios';
import { API_URL, AUTH_TOKEN } from '../constants';


export const login = (data) => {
  return axios.post(`${API_URL}/login`, data)
    .then(({ data: { user, token } }) => {
      localStorage.setItem(AUTH_TOKEN, token);
      return user;
    })
    .catch(() => null);
};

export const verifyToken = (token) => {
  return axios.post(`${API_URL}/verifyToken`, { token })
    .then(({ data }) => data)
    .catch(() => {
      localStorage.removeItem(AUTH_TOKEN);
      return null;
    });
};
