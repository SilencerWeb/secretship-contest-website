import axios from 'axios';
import { API_URL } from '../constants';


export const getUsers = () => {
  return axios.get(`${API_URL}/users`)
    .then(({ data: { users } }) => users)
    .catch((error) => {
      const errorMessage = error.response ? error.response.data.message : error.message;
      throw new Error(errorMessage);
    });
};
