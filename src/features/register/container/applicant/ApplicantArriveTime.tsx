import React from 'react';
import styled from 'styled-components';

import { hours, minutes } from '../../components/data/timeData';
import CommonSelect from '../../components/selector/CommonSelect';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #e5e5e7;
  padding: 20px 0px;

  .applicant-arriveTime-title {
    font-size: 20px;
    color: #212121;
    padding-bottom: 24px;
  }
  .applicant-arriveTime-informations {
    display: flex;
    padding-bottom: 24px;
  }
`;

interface Props {
  arriveTime: {
    hour: { value: string; isValid: string };
    minute: { value: string; isValid: string };
  };
  onChnageHour: (value: string) => void;
  onChnageMinute: (value: string) => void;
}
const ApplicantArriveTime = ({ arriveTime, onChnageMinute, onChnageHour }: Props) => {
  const { hour, minute } = arriveTime;
  return (
    <Container>
      <span className="applicant-arriveTime-title">숙소 도착 예정 시간</span>
      <div className="applicant-arriveTime-informations">
        <CommonSelect
          value={hour.value}
          error={hour.isValid}
          options={hours}
          onChange={onChnageHour}
        />
        <CommonSelect
          value={minute.value}
          error={minute.isValid}
          options={minutes}
          onChange={onChnageMinute}
        />
      </div>
    </Container>
  );
};

export default ApplicantArriveTime;
