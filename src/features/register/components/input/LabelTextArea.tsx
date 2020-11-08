import React from 'react';
import styled from 'styled-components';

interface InputProps {
  isValid?: boolean;
}
const TextArea = styled.textarea`
  resize: none;
  width: calc(100%-16px);
  min-height: 80px;

  border: ${(props: InputProps) =>
    props.isValid ? '1px solid #ff4d4f' : '1px solid #f4f4f4'} !important;

  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  outline: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .label-textarea-title {
    font-size: 14px;
    height: 30px;
    color: #929399;
  }
  .label-textarea-error {
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
const LabelTextArea = ({
  className,
  title,
  error,
  placeholder,
  value,
  onChange,
}: Props) => {
  const isValid = error ? true : false;
  return (
    <Container className={className}>
      {error ? (
        <span className="label-textarea-error">{error}</span>
      ) : (
        <span className="label-textarea-title">{title}</span>
      )}
      <TextArea
        isValid={isValid}
        spellCheck={false}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </Container>
  );
};

export default LabelTextArea;
