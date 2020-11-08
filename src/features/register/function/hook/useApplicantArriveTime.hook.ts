import { useState } from 'react';
import { isRequiredValidation } from '../validation/isRequiredValidation';

const useApplicantArriveTime = () => {
  const [arriveTime, setArriveTime] = useState({
    hour: {
      value: '',
      isValid: '',
    },
    minute: {
      value: '',
      isValid: '',
    },
  });

  function onChnageHour(hour: string) {
    const { error } = isRequiredValidation(hour);
    setArriveTime({
      ...arriveTime,
      hour: {
        ...arriveTime.hour,
        value: hour,
        isValid: error,
      },
    });
  }
  function onChnageMinute(minute: string) {
    const { error } = isRequiredValidation(minute);
    setArriveTime({
      ...arriveTime,
      minute: {
        ...arriveTime.minute,
        value: minute,
        isValid: error,
      },
    });
  }
  function onApplicantArriveTimeCheck() {
    let newArriveTime = {
      hour: {
        value: '',
        isValid: '',
      },
      minute: {
        value: '',
        isValid: '',
      },
    };
    const hourError = isRequiredValidation(arriveTime.hour.value);
    const minuteError = isRequiredValidation(arriveTime.minute.value);

    newArriveTime = {
      ...arriveTime,
      hour: {
        ...arriveTime.hour,
        isValid: hourError.error,
      },
      minute: {
        ...arriveTime.minute,
        isValid: minuteError.error,
      },
    };
    setArriveTime(newArriveTime);
  }

  return {
    arriveTime,
    onChnageHour,
    onChnageMinute,
    onApplicantArriveTimeCheck,
  };
};

export default useApplicantArriveTime;
