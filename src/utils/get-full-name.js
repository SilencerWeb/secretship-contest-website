export const getFullName = (firstName, lastName) => {
  if (!lastName) return firstName;

  return `${firstName} ${lastName}`;
}; 
