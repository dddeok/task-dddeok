import { useState } from 'react';

const useApplicantArriveTime = () => {
  const [arriveTime, setArriveTime] = useState({
    hour: '',
    minute: '',
    isValid: '',
  });

  function onChnageHour(hour: string) {
    setArriveTime({ ...arriveTime, hour: hour });
  }
  function onChnageMinute(minute: string) {
    setArriveTime({ ...arriveTime, minute: minute });
  }
  return {
    arriveTime,
    onChnageHour,
    onChnageMinute,
  };
};

export default useApplicantArriveTime;
