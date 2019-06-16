export const getFormattedRegistrationDate = (date, locale) => {
  const registrationDateAsDate = new Date(date);

  return registrationDateAsDate.toLocaleDateString(
    locale,
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  );
};
