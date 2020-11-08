import React, { useState } from 'react';
import styled from 'styled-components';

import Tourist from '../container/tourist/Tourist';
import Applicant from '../container/applicant/Applicant';
import ApplicantAgreement from '../container/applicant/ApplicantAgreement';
import useTourist from '../function/hook/useTourist.hook';
import useApplicant from '../function/hook/useApplicant.hook';
import useAgreement from '../function/hook/useAgreement.hook';
import { PrimaryButton } from '../components/button/PrimaryButton';
import { isEnglishNameValidation } from '../function/validation/isEnglishNameValidation';
import { isKorNameValidation } from '../function/validation/isKorNameValidation';
import { isBirthDayValidation } from '../function/validation/isBirthdayValidation';
import { isPhoneNumberValidation } from '../function/validation/isPhoneNumberValidation';
import { isReservationValidation } from '../function/validation/isReservationValidation';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding: 30px 0px;
`;

const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 668px;
  min-width: 320px;
  padding: 30px;

  border: 1px solid #e5e5e7;

  .register-form-title {
    font-size: 20px;
    color: #212121;
  }
`;

const Register = () => {
  const { ids, entities, setIds, setEntities } = useTourist();
  const { applicant, setApplicant } = useApplicant();
  const {
    entire,
    required,
    option,
    onEntireChange,
    onRequiredChange,
    onOptionChange,
  } = useAgreement();
  const { userName, phoneNumber, reservation } = applicant;
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

  return (
    <Container>
      <RegisterForm>
        {ids.map((id, index) => {
          const { firstName, lastName, korName, gender, birthday } = entities[id];
          return (
            <Tourist
              key={index}
              firstName={firstName}
              lastName={lastName}
              korName={korName}
              gender={gender}
              birthday={birthday}
              onFirstNameChange={(firstName: string) => onFirstNameChange(id, firstName)}
              onLastNameChange={(lastName: string) => onLastNameChange(id, lastName)}
              onKorNameChange={(korName: string) => onKorNameChange(id, korName)}
              onGenderChange={(gender: string) => onGenderChange(id, gender)}
              onBirthdayChange={(birthday: string) => onBirthdayChange(id, birthday)}
            />
          );
        })}
        <Applicant
          userName={userName}
          phoneNumber={phoneNumber}
          reservation={reservation}
          onUserNameChnage={onUserNameChange}
          onPhoneNumberChange={onPhoneNumberChange}
          onReservationChange={onReservationChange}
        />
        <ApplicantAgreement
          isEntire={entire}
          isRequired={required}
          isOption={option}
          onEntireChange={onEntireChange}
          onRequiredChange={onRequiredChange}
          onOptionChange={onOptionChange}
        />
        <PrimaryButton disabled={!required}>결제하기</PrimaryButton>
      </RegisterForm>
    </Container>
  );
};

export default Register;
