export const isPhoneNumberValidation = (number: string) => {
  const isNumberRegex = /^[0-9]+$/;
  let error = '';
  if (number.length < 2) error = '최소 2자이상 입력해주세요.';
  else if (number.length > 20) error = '최대 20자까지 입력 가능합니다.';
  else if (!isNumberRegex.test(number)) error = '숫자만 입력 가능합니다';
  else error = '';
  return {
    error,
  };
};
