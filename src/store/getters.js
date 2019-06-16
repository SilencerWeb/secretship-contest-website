export const getUsersWithoutAuthorizedUser = (state) => {
  const authorizedUser = state.user;
  const users = state.users;

  if (!authorizedUser) return users;

  return users.filter((user) => user.id !== authorizedUser.id);
};
