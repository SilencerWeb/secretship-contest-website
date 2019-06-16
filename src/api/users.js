import axios from 'axios';
import { API_URL } from '../constants';


export const getUsers = () => {
  return axios.get(`${API_URL}/users`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.data ? error.data.message : error);
      return null;
    });
};
