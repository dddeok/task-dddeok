export const isReservationValidation = (reservation: string) => {
  let error = '';

  if (!reservation) error = '기타 예약정보를 입력해주세요';
  else if (reservation.length > 200) error = '최대 200자 까지 입력 가능합니다.';
  else error = '';
  return {
    error,
  };
};
