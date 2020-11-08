import styled from 'styled-components';

export const PrimaryButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #1968fc;
  border-radius: 4px;
  background: #1968fc;
  color: white;
  font-size: 16px;

  outline: 0;
  cursor: pointer;

  :disabled {
    cursor: default;
    border: 1px solid #535562;
    background: #535562;
  }
`;
