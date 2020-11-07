export const isEnglishNameValidation = (name: string) => {
  let error = '';
  const isEnglishNameValidation = /^[a-zA-Z\s]+$/;

  if (name.length < 2) error = '최소 2자이상 입력해주세요.';
  else if (name.length > 20) error = '최대 20자까지 입력가능합니다.';
  else if (!isEnglishNameValidation.test(name))
    error = '영어와 띄어쓰기만 입력가능합니다.';
  else error = '';
  return {
    error,
  };
};
