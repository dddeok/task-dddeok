import { useState } from 'react';
import { TouristEntity } from '../../utils/register.interface';

import { isEnglishNameValidation } from '../../function/validation/isEnglishNameValidation';
import { isKorNameValidation } from '../../function/validation/isKorNameValidation';
import { isBirthDayValidation } from '../../function/validation/isBirthdayValidation';
const useTourist = () => {
  const [ids, setIds] = useState<number[]>([0, 1]);
  const [entities, setEntities] = useState<TouristEntity>({
    0: {
      id: 0,
      firstName: { value: '', isValid: '' },
      lastName: { value: '', isValid: '' },
      korName: { value: '', isValid: '' },
      gender: { value: '', isValid: '' },
      birthday: { value: '', isValid: '' },
    },
    1: {
      id: 1,
      firstName: { value: '', isValid: '' },
      lastName: { value: '', isValid: '' },
      korName: { value: '', isValid: '' },
      gender: { value: '', isValid: '' },
      birthday: { value: '', isValid: '' },
    },
  });

  function onFirstNameChange(id: number, firstName: string) {
    const { error } = isEnglishNameValidation(firstName);
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        firstName: {
          ...entities[id].firstName,
          value: firstName,
          isValid: error,
        },
      },
    });
  }
  function onLastNameChange(id: number, lastName: string) {
    const { error } = isEnglishNameValidation(lastName);
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        lastName: { ...entities[id].lastName, value: lastName, isValid: error },
      },
    });
  }
  function onKorNameChange(id: number, korName: string) {
    const { error } = isKorNameValidation(korName);
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        korName: { ...entities[id].korName, value: korName, isValid: error },
      },
    });
  }
  function onGenderChange(id: number, gender: string) {
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        gender: { ...entities[id].gender, value: gender },
      },
    });
  }
  function onBirthdayChange(id: number, birthday: string) {
    const { error } = isBirthDayValidation(birthday);
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        birthday: { ...entities[id].birthday, value: birthday, isValid: error },
      },
    });
  }

  return {
    ids,
    entities,
    onFirstNameChange,
    onLastNameChange,
    onKorNameChange,
    onGenderChange,
    onBirthdayChange,
  };
};

export default useTourist;
