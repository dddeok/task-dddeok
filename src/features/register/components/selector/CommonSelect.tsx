import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  width?: number;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: ContainerProps) => (props.width ? `${props.width}px` : '100%')};
  .common-select-title {
    font-size: 14px;
    height: 30px;
    color: #929399;
  }
  .common-select-error {
    font-size: 14px;
    color: #ff4d4f;
    height: 30px;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 44px;
  border: 1px solid #f4f4f4;
  border-radius: 4px;
`;

const Option = styled.option``;

interface Props {
  className?: string;
  value: string | number;
  title?: string;
  error?: string;
  options: { title: string; value: string }[];
  width?: number;
  onChange: (value: string) => void;
}
const CommonSelect = ({
  className,
  width,
  value,
  title,
  error,
  options,
  onChange,
}: Props) => {
  return (
    <Container className={className} width={width}>
      {error ? (
        <span className="common-select-error">{error}</span>
      ) : (
        <span className="common-select-title">{title}</span>
      )}
      <Select value={value} onChange={e => onChange(e.target.value)}>
        {options.map((option, index) => {
          const { title, value } = option;
          return (
            <Option key={index} value={value}>
              {title}
            </Option>
          );
        })}
      </Select>
    </Container>
  );
};

export default CommonSelect;
