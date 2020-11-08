import React from 'react';
import styled from 'styled-components';

interface InputProps {
  isValid?: boolean;
}
const TextInput = styled.input`
  width: calc(100% - 16px);
  height: 40px;

  border: ${(props: InputProps) =>
    props.isValid ? '1px solid #ff4d4f' : '1px solid #f4f4f4'};
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  outline: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .label-input-title {
    font-size: 14px;
    height: 30px;
    color: #929399;
  }
  .label-input-error {
    font-size: 14px;
    color: #ff4d4f;
    height: 30px;
  }
`;

interface Props {
  className?: string;
  title?: string;
  error?: string;
  placeholder?: string;
  value: string;

  onChange: (value: string) => void;
}
const LabelInput = ({ className, title, error, placeholder, value, onChange }: Props) => {
  const isValid = error ? true : false;
  return (
    <Container className={className}>
      {error ? (
        <span className="label-input-error">{error}</span>
      ) : (
        <span className="label-input-title">{title}</span>
      )}
      <TextInput
        autoFocus={isValid}
        isValid={isValid}
        spellCheck={false}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Container>
  );
};

export default LabelInput;
