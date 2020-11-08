export const isRequiredValidation = (value: string) => {
  let error = '';
  if (!value) error = '필수 항목 입니다.';
  else error = '';
  return {
    error,
  };
};
