export const setLanguage = (state, language) => {
  state.language = language;
};

export const setIsUserLoggedIn = (state, isUserLoggedIn) => {
  state.isUserLoggedIn = isUserLoggedIn;
};

export const setUser = (state, user) => {
  state.user = user;
};

export const setUsers = (state, users) => {
  state.users = users;
};

export const setIsAuthorizationCheckFinished = (state, isAuthorizationCheckFinished) => {
  state.isAuthorizationCheckFinished = isAuthorizationCheckFinished;
};

export const setIsUserRequestFinished = (state, isUserRequestFinished) => {
  state.isUserRequestFinished = isUserRequestFinished;
};

export const setIsUsersRequestFinished = (state, isUsersRequestFinished) => {
  state.isUsersRequestFinished = isUsersRequestFinished;
};
