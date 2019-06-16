import * as api from '../api';
import { AUTH_TOKEN } from '../constants';


export const setUpLanguage = (context, vueInstance) => {
  const languages = window.navigator.languages;
  const currentLanguage = languages[languages.length - 1]; // Because short version is always last, e.g. ['en-US', 'en']

  vueInstance.$i18n.locale = currentLanguage;
  context.commit('setLanguage', currentLanguage);
};

export const login = (context, urlParameters) => {
  api.login(urlParameters)
    .then((user) => {
      context.commit('setIsUserLoggedIn', true);
      context.commit('setUser', user);
      context.commit('setIsAuthorizationCheckFinished', true);
      context.commit('setIsUserRequestFinished', true);
    })
    .catch(() => {
      context.commit('setIsAuthorizationCheckFinished', true);
      context.commit('setIsUserRequestFinished', true);
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
      context.commit('setIsAuthorizationCheckFinished', true);
      context.dispatch('fetchUser');
    })
    .catch(() => {
      context.commit('setIsUserLoggedIn', false);
      context.commit('setIsAuthorizationCheckFinished', true);
      context.commit('setUser', null);
    });
};

export const fetchUser = (context) => {
  api.getMe()
    .then((user) => {
      context.commit('setUser', user);
      context.commit('setIsUserRequestFinished', true);
    })
    .catch(() => {
      context.commit('setIsUserRequestFinished', true);
    });
};

export const fetchUsers = (context) => {
  api.getUsers()
    .then((users) => {
      context.commit('setUsers', users);
      context.commit('setIsUsersRequestFinished', true);
    })
    .catch(() => {
      context.commit('setIsUsersRequestFinished', true);
    });
};
