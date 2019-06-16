import axios from 'axios';
import { API_URL, AUTH_TOKEN } from '../constants';


export const login = (data) => {
  return axios.post(`${API_URL}/login`, data)
    .then(({ data: { user, token } }) => {
      localStorage.setItem(AUTH_TOKEN, token);
      return user;
    })
    .catch((error) => {
      const errorMessage = error.data ? error.data.message : error.message;
      throw new Error(errorMessage);
    });
};

export const verifyToken = (token) => {
  return axios.post(`${API_URL}/verifyToken`, { token })
    .then(({ data: { message } }) => message)
    .catch((error) => {
      localStorage.removeItem(AUTH_TOKEN);

      const errorMessage = error.data ? error.data.message : error.message;
      throw new Error(errorMessage);
    });
};
