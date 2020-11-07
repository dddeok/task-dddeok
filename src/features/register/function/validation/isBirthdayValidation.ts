export const isBirthDayValidation = (number: string) => {
  const isNumberRegex = /^[0-9]+$/;
  let error = '';
  if (number.length != 6) error = '6자리의 생년월일을 입력하세요.';
  else if (!isNumberRegex.test(number)) error = '숫자만 입력 가능합니다';
  else error = '';
  return {
    error,
  };
};
