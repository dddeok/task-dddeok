import { useState } from 'react';
import { Applicant } from '../../utils/register.interface';

import { isEnglishNameValidation } from '../../function/validation/isEnglishNameValidation';
import { isPhoneNumberValidation } from '../../function/validation/isPhoneNumberValidation';
import { isReservationValidation } from '../../function/validation/isReservationValidation';
const useApplicant = () => {
  const [applicant, setApplicant] = useState<Applicant>({
    userName: { value: '', isValid: '' },
    countryNumber: { value: '82', isValid: '' },
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

  function onApplicantCheck() {
    let newApplicant: Applicant = {
      userName: {
        value: '',
        isValid: '',
      },
      phoneNumber: {
        value: '',
        isValid: '',
      },
      countryNumber: {
        value: '82',
        isValid: '',
      },
      reservation: {
        value: '',
        isValid: '',
      },
    };
    const userNameError = isEnglishNameValidation(applicant.userName.value);
    const phoneNumberError = isPhoneNumberValidation(applicant.phoneNumber.value);
    const reservationError = isReservationValidation(applicant.reservation.value);
    newApplicant = {
      ...applicant,
      userName: {
        ...applicant.userName,
        isValid: userNameError.error,
      },
      phoneNumber: {
        ...applicant.phoneNumber,
        isValid: phoneNumberError.error,
      },
      reservation: {
        ...applicant.reservation,
        isValid: reservationError.error,
      },
    };

    setApplicant(newApplicant);
    if (
      newApplicant.userName.isValid ||
      newApplicant.phoneNumber.isValid ||
      newApplicant.reservation.isValid
    )
      return true;
  }
  return {
    applicant,
    onUserNameChange,
    onPhoneNumberChange,
    onReservationChange,
    onApplicantCheck,
  };
};

export default useApplicant;
