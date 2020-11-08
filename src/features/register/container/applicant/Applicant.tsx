import React from 'react';
import styled from 'styled-components';

import LabelInput from '../../components/input/LabelInput';
import LabelTextArea from '../../components/input/LabelTextArea';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #e5e5e7;
  padding: 20px 0px;
  .applicant-title {
    font-size: 20px;
    color: #212121;
    padding-bottom: 24px;
  }
  .applicant-information {
    display: flex;
    padding-bottom: 20px;
  }
  .applicant-information-ect {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    padding-top: 20px;
    border-top: 1px solid #e5e5e7;
  }
`;

const ApplicantInput = styled(LabelInput)``;
const ApplicantTextArea = styled(LabelTextArea)``;

interface Props {
  userName: {
    value: string;
    isValid: string;
  };
  phoneNumber: {
    value: string;
    isValid: string;
  };
  reservation: {
    value: string;
    isValid: string;
  };
  onUserNameChnage: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  onReservationChange: (value: string) => void;
}
const Applicant = ({
  userName,
  phoneNumber,
  reservation,
  onUserNameChnage,
  onPhoneNumberChange,
  onReservationChange,
}: Props) => {
  return (
    <Container>
      <span className="applicant-title">상세 핸드폰 정보</span>
      <div className="applicant-information">
        <ApplicantInput
          title="사용자 이름"
          value={userName.value}
          error={userName.isValid}
          onChange={onUserNameChnage}
          placeholder="홍길동"
        />
      </div>
      <div className="applicant-information">
        <ApplicantInput
          value={phoneNumber.value}
          error={phoneNumber.isValid}
          onChange={onPhoneNumberChange}
          placeholder={'"-" 없이 입력해주세요'}
        />
      </div>
      <div className="applicant-information-ect">
        <span className="applicant-title">기타 예약 정보</span>
        <ApplicantTextArea
          title="오시는 교통 수단을 적어주세요"
          value={reservation.value}
          error={reservation.isValid}
          onChange={onReservationChange}
          placeholder={'답변을 입력해주세요.'}
        />
      </div>
    </Container>
  );
};

export default Applicant;
