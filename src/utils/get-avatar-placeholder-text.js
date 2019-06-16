export const getAvatarPlaceholderText = (firstName, lastName) => {
  const firstLetterOfFirstName = firstName.slice(0, 1);
  let firstLetterOfLastName = '';

  if (lastName) {
    firstLetterOfLastName = lastName.slice(0, 1);
  }

  return `${firstLetterOfFirstName}${firstLetterOfLastName}`.toLocaleUpperCase();
};
