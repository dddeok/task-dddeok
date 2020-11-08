import React, { useState } from 'react';
import styled from 'styled-components';

import Tourist from '../container/tourist/Tourist';
import Applicant from '../container/applicant/Applicant';
import ApplicantAgreement from '../container/applicant/ApplicantAgreement';
import ApplicantArriveTime from '../container/applicant/ApplicantArriveTime';
import useTourist from '../function/hook/useTourist.hook';
import useApplicant from '../function/hook/useApplicant.hook';
import useAgreement from '../function/hook/useAgreement.hook';
import useApplicantArriveTime from '../function/hook/useApplicantArriveTime.hook';
import { PrimaryButton } from '../components/button/PrimaryButton';

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
  const {
    ids,
    entities,
    onFirstNameChange,
    onLastNameChange,
    onKorNameChange,
    onGenderChange,
    onBirthdayChange,
    onToristCheck,
  } = useTourist();
  const {
    applicant,
    onUserNameChange,
    onPhoneNumberChange,
    onReservationChange,
    onApplicantCheck,
  } = useApplicant();
  const {
    arriveTime,
    onChnageHour,
    onChnageMinute,
    onApplicantArriveTimeCheck,
  } = useApplicantArriveTime();
  const {
    entire,
    required,
    option,
    onEntireChange,
    onRequiredChange,
    onOptionChange,
  } = useAgreement();
  const { userName, countryNumber, phoneNumber, reservation } = applicant;

  function onSumbit() {
    const touristCheck = onToristCheck();
    const applicantCheck = onApplicantCheck();
    const arriveTiemCheck = onApplicantArriveTimeCheck();
    if (touristCheck.find(check => check == true)) return;
    else if (applicantCheck || arriveTiemCheck) return;
    else alert('성공!');
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
        <ApplicantArriveTime
          arriveTime={arriveTime}
          onChnageHour={onChnageHour}
          onChnageMinute={onChnageMinute}
        />
        <Applicant
          userName={userName}
          phoneNumber={phoneNumber}
          reservation={reservation}
          countryNumber={countryNumber}
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
        <PrimaryButton disabled={!required} onClick={onSumbit}>
          결제하기
        </PrimaryButton>
      </RegisterForm>
    </Container>
  );
};

export default Register;
