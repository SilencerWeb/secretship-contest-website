import * as api from '../api';
import { AUTH_TOKEN } from '../constants';


export const login = (context, urlParameters) => {
  api.login(urlParameters)
    .then((user) => {
      context.commit('setIsUserLoggedIn', true);
      context.commit('setUser', user);
    });
};

export const logout = (context) => {
  localStorage.removeItem(AUTH_TOKEN);
  context.commit('setIsUserLoggedIn', false);
  context.commit('setUser', null);
};

export const verifyToken = (context, token) => {
  api.verifyToken(token)
    .then(() => {
      context.commit('setIsUserLoggedIn', true);
      context.dispatch('fetchUser');
    })
    .catch(() => {
      context.commit('setIsUserLoggedIn', false);
      context.commit('setUser', null);
    });
};

export const fetchUser = (context) => {
  api.getMe()
    .then((user) => {
      context.commit('setUser', user);
    });
};

export const fetchUsers = (context) => {
  api.getUsers()
    .then((users) => {
      context.commit('setUsers', users);
    });
};
