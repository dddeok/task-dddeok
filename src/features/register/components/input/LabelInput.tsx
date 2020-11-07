import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  width: calc(100% - 16px);
  height: 40px;
  border: 1px solid #f4f4f4;
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .label-input-title {
    font-size: 14px;
    color: #929399;
    padding-bottom: 12px;
  }
  .label-input-error {
    font-size: 12px;
    color: #ff4d4f;
    padding-top: 8px;
    height: 26px;
  }
`;

interface Props {
  className?: string;
  title: string;
  error?: string;
  placeholder?: string;
  value: string;

  onChange: (value: string) => void;
}
const LabelInput = ({ className, title, error, placeholder, value, onChange }: Props) => {
  return (
    <Container className={className}>
      <span className="label-input-title">{title}</span>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <span className="label-input-error">{error}</span>
    </Container>
  );
};

export default LabelInput;
