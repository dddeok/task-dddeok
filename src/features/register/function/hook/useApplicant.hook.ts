import { useState } from 'react';
import { Applicant } from '../../utils/register.interface';

import { isEnglishNameValidation } from '../../function/validation/isEnglishNameValidation';
import { isPhoneNumberValidation } from '../../function/validation/isPhoneNumberValidation';
import { isReservationValidation } from '../../function/validation/isReservationValidation';
const useApplicant = () => {
  const [applicant, setApplicant] = useState<Applicant>({
    userName: { value: '', isValid: '' },
    countryNumber: { value: '', isValid: '' },
    phoneNumber: { value: '', isValid: '' },
    reservation: { value: '', isValid: '' },
  });

  function onUserNameChange(userName: string) {
    const { error } = isEnglishNameValidation(userName);
    setApplicant({
      ...applicant,
      userName: {
        ...applicant.userName,
        value: userName,
        isValid: error,
      },
    });
  }

  function onPhoneNumberChange(phoneNumber: string) {
    const { error } = isPhoneNumberValidation(phoneNumber);
    setApplicant({
      ...applicant,
      phoneNumber: {
        ...applicant.phoneNumber,
        value: phoneNumber,
        isValid: error,
      },
    });
  }

  function onReservationChange(reservation: string) {
    const { error } = isReservationValidation(reservation);
    setApplicant({
      ...applicant,
      reservation: {
        ...applicant.reservation,
        value: reservation,
        isValid: error,
      },
    });
  }
  return {
    applicant,
    onUserNameChange,
    onPhoneNumberChange,
    onReservationChange,
  };
};

export default useApplicant;
