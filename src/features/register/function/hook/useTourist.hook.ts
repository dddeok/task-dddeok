import { useState } from 'react';
import { TouristEntity } from '../../utils/register.interface';

import { isEnglishNameValidation } from '../../function/validation/isEnglishNameValidation';
import { isKorNameValidation } from '../../function/validation/isKorNameValidation';
import { isBirthDayValidation } from '../../function/validation/isBirthdayValidation';
import { isGenderValidation } from '../../function/validation/isGenderValidation';
const useTourist = () => {
  const [ids, setIds] = useState<string[]>(['0', '1']);
  const [entities, setEntities] = useState<TouristEntity>({
    ['0']: {
      id: '0',
      firstName: { value: '', isValid: '' },
      lastName: { value: '', isValid: '' },
      korName: { value: '', isValid: '' },
      gender: { value: '', isValid: '' },
      birthday: { value: '', isValid: '' },
    },
    ['1']: {
      id: '1',
      firstName: { value: '', isValid: '' },
      lastName: { value: '', isValid: '' },
      korName: { value: '', isValid: '' },
      gender: { value: '', isValid: '' },
      birthday: { value: '', isValid: '' },
    },
  });

  function onFirstNameChange(id: string, firstName: string) {
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
  function onLastNameChange(id: string, lastName: string) {
    const { error } = isEnglishNameValidation(lastName);
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        lastName: {
          ...entities[id].lastName,
          value: lastName,
          isValid: error,
        },
      },
    });
  }
  function onKorNameChange(id: string, korName: string) {
    const { error } = isKorNameValidation(korName);
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        korName: { ...entities[id].korName, value: korName, isValid: error },
      },
    });
  }
  function onGenderChange(id: string, gender: string) {
    const { error } = isGenderValidation(gender);
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        gender: { ...entities[id].gender, value: gender, isValid: error },
      },
    });
  }
  function onBirthdayChange(id: string, birthday: string) {
    const { error } = isBirthDayValidation(birthday);
    setEntities({
      ...entities,
      [id]: {
        ...entities[id],
        birthday: { ...entities[id].birthday, value: birthday, isValid: error },
      },
    });
  }

  function onToristCheck() {
    let newEntiteis = {};
    ids.map(id => {
      const firstNameError = isEnglishNameValidation(entities[id].firstName.value);
      const lastNameError = isEnglishNameValidation(entities[id].lastName.value);
      const korNameError = isKorNameValidation(entities[id].korName.value);
      const genederError = isGenderValidation(entities[id].gender.value);
      const birthdayError = isBirthDayValidation(entities[id].birthday.value);
      newEntiteis = {
        ...newEntiteis,
        [id]: {
          id: id,
          firstName: {
            ...entities[id].firstName,
            isValid: firstNameError.error,
          },
          lastName: {
            ...entities[id].lastName,
            isValid: lastNameError.error,
          },
          korName: {
            ...entities[id].korName,
            isValid: korNameError.error,
          },
          gender: {
            ...entities[id].gender,
            isValid: genederError.error,
          },
          birthday: {
            ...entities[id].birthday,
            isValid: birthdayError.error,
          },
        },
      };
    });
    setEntities(newEntiteis);
  }

  return {
    ids,
    entities,
    onFirstNameChange,
    onLastNameChange,
    onKorNameChange,
    onGenderChange,
    onBirthdayChange,
    onToristCheck,
  };
};

export default useTourist;
