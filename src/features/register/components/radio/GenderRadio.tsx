import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { GenderEnum } from '../../utils/register.enum';
interface StyleProps {
  active?: boolean;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input[id='gender'] {
    display: none;
  }

  .gender-radio-title {
    font-size: 14px;
    color: #929399;
    padding-bottom: 12px;
  }

  .gender-radio-groups {
    display: flex;
    height: 40px;
    border: 1px solid #e4e4e7;
    border-radius: 4px;
  }
  .gender-radio-error {
    font-size: 12px;
    color: #ff4d4f;
    padding-top: 8px;
    height: 26px;
  }
`;

const Radio = styled.input.attrs({
  type: 'radio',
})`
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;

  ${(props: StyleProps) =>
    props.active
      ? css`
          background: #1968fc;
          color: white;
        `
      : null}
`;

interface Props {
  value: string;
  error?: string;
  onChange: (value: string) => void;
}
const GenderRadio = ({ value, error, onChange }: Props) => {
  return (
    <Container>
      <span className="gender-radio-title">성별</span>
      <div className="gender-radio-groups">
        <Label active={value == GenderEnum.MALE}>
          <Radio
            id="gender"
            name="gender"
            value={GenderEnum.MALE}
            onChange={e => onChange(e.target.value)}
          />
          남성
        </Label>
        <Label active={value == GenderEnum.FEMALE}>
          <Radio
            id="gender"
            name="gender"
            value={GenderEnum.FEMALE}
            onChange={e => onChange(e.target.value)}
          />
          여성
        </Label>
      </div>
      <span className="gender-radio-error">{error}</span>
    </Container>
  );
};

export default GenderRadio;
