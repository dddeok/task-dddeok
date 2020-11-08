import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 12px;

  .label-checkbox-title {
    font-size: 16px;
    color: #212121;
  }
`;

interface Props {
  name?: string;
  title: string;
  value: boolean;
  onChange: (value: boolean) => void;
}
const LabelCheckbox = ({ name, title, value, onChange }: Props) => {
  return (
    <Container>
      <Checkbox name={name} checked={value} onChange={e => onChange(e.target.checked)} />
      <span className="label-checkbox-title">{title}</span>
    </Container>
  );
};

export default LabelCheckbox;
