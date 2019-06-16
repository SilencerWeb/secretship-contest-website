import * as api from '../api';
import { getAvatarPlaceholderBackgroundColorStyle, getAvatarPlaceholderText } from '../utils';
import { AUTH_TOKEN } from '../constants';


export const login = (context, urlParameters) => {
  api.login(urlParameters)
    .then((user) => {
      context.commit('setIsUserLoggedIn', true);
      context.commit('setUser', user);
      context.commit('setIsAuthorizationCheckFinished', true);

      if (!user.avatar || Object.keys(user.avatar).length === 0) {
        context.dispatch('generateUserAvatarPlaceholders');
      } else {
        context.commit('setIsUserRequestFinished', true);
      }
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
      if (!user.avatar) {
        context.dispatch('generateUserAvatarPlaceholders');
      } else {
        context.commit('setIsUserRequestFinished', true);
      }
    })
    .catch(() => {
      context.commit('setIsUserRequestFinished', true);
    });
};

export const fetchUsers = (context) => {
  api.getUsers()
    .then((users) => {
      context.commit('setUsers', users);
      context.dispatch('generateUsersAvatarPlaceholders');
    })
    .catch(() => {
      context.commit('setIsUsersRequestFinished', true);
    });
};

export const generateUserAvatarPlaceholders = (context) => {
  const user = context.state.user;

  const newUser = {
    ...user,
    avatar: {
      placeholder: {
        style: getAvatarPlaceholderBackgroundColorStyle(),
        text: getAvatarPlaceholderText(),
      },
    },
  };

  context.commit('setUser', newUser);
  context.commit('setIsUserRequestFinished', true);
};

export const generateUsersAvatarPlaceholders = (context) => {
  const users = context.state.users;

  const newUsers = users.map((user) => {
    if (!user.avatar || Object.keys(user.avatar).length === 0) {
      return {
        ...user,
        avatar: {
          placeholder: {
            backgroundColorStyle: getAvatarPlaceholderBackgroundColorStyle(),
            text: getAvatarPlaceholderText(user.first_name, user.last_name),
          },
        },
      };
    }

    return user;
  });

  context.commit('setUsers', newUsers);
  context.commit('setIsUsersRequestFinished', true);
};
