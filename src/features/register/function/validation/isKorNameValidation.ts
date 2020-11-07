export const isKorNameValidation = (name: string) => {
  let error = '';
  const isKorNameValidation = /^[가-힣]+$/;

  if (name.length < 2) error = '최소 2자이상 입력해주세요.';
  else if (name.length > 20) error = '최대 20자까지 입력가능합니다.';
  else if (!isKorNameValidation.test(name)) error = '한글만 입력가능합니다';
  else error = '';
  return {
    error,
  };
};
