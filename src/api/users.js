import axios from 'axios';
import { API_URL, AUTH_TOKEN } from '../constants';


export const getMe = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  return axios.get(`${API_URL}/me`, { headers })
    .then(({ data: { user } }) => user)
    .catch((error) => {
      const errorMessage = error.data ? error.data.message : error.message;
      throw new Error(errorMessage);
    });
};

export const getUsers = () => {
  return axios.get(`${API_URL}/users`)
    .then(({ data: { users } }) => users)
    .catch((error) => {
      const errorMessage = error.data ? error.data.message : error.message;
      throw new Error(errorMessage);
    });
};
