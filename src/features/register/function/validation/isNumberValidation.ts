export const isNumberValidation = (number: string) => {
  const isNumberRegex = /^[0-9\b]+$/;
  return isNumberRegex.test(number);
};
