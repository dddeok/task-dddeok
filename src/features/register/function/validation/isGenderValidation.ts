export const isGenderValidation = (value: string) => {
  let error = '';
  if (!value) error = '성별을 선택해주세요.';
  else error = '';
  return {
    error,
  };
};
