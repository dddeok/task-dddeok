import React, { useState } from 'react';
import styled from 'styled-components';

import LabelInput from '../../components/input/LabelInput';
import GenderLadio from '../../components/radio/GenderRadio';
import { isNumberValidation } from '../../function/validation/isNumberValidation';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 0px;
  .tourist-title {
    font-size: 20px;
    color: #212121;
    padding-bottom: 4px;
  }
  .tourist-description {
    font-weight: 15px;
    color: #535562;
    padding-bottom: 24px;
  }

  .tourist-information {
    display: flex;
    padding-bottom: 20px;
  }
  .tourist-korName {
    display: flex;
  }
`;

const TouristInput = styled(LabelInput)`
  margin-right: 12px;
`;

interface Props {
  firstName: string;
  lastName: string;
  korName: string;
  gender: string;
  birthday: string;
  firstNameError?: string;
  lastNameError?: string;
  korNameError?: string;
  genderError?: string;
  birthdayError?: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onKorNameChange: (value: string) => void;
  onGenderChange: (value: string) => void;
  onBirthdayChange: (value: string) => void;
}
const Tourist = ({
  firstName,
  lastName,
  korName,
  gender,
  birthday,
  firstNameError,
  lastNameError,
  korNameError,
  genderError,
  birthdayError,
  onFirstNameChange,
  onLastNameChange,
  onKorNameChange,
  onGenderChange,
  onBirthdayChange,
}: Props) => {
  return (
    <Container>
      <span className="tourist-title">여행자</span>
      <span className="tourist-description">
        예약하시는 모든분의 정보를 여권 상과 동일하게 기입해 주시기 바랍니다.
      </span>
      <div className="tourist-information">
        <TouristInput
          title="영문 이름"
          value={firstName}
          error={firstNameError}
          onChange={onFirstNameChange}
          placeholder="Gil Dong"
        />
        <TouristInput
          title="영문 성"
          value={lastName}
          error={lastNameError}
          placeholder="Hong"
          onChange={onLastNameChange}
        />
      </div>
      <div className="tourist-information">
        <TouristInput
          title="한글 이름"
          value={korName}
          error={korNameError}
          placeholder="홍길동"
          onChange={onKorNameChange}
        />
      </div>
      <div className="tourist-information">
        <GenderLadio value={gender} onChange={onGenderChange} />
      </div>
      <div className="tourist-information">
        <TouristInput
          title="생년월일"
          placeholder="881225"
          value={birthday}
          error={birthdayError}
          onChange={onBirthdayChange}
        />
      </div>
    </Container>
  );
};

export default Tourist;
