import React from 'react';
import styled from 'styled-components';

import LabelCheckbox from '../../components/checkbox/LabelCheckbox';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 20px 0px;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  border: 1px solid #e5e5e7;
  border-radius: 4px;

  padding: 16px;
`;

interface Props {
  isEntire: boolean;
  isRequired: boolean;
  isOption: boolean;
  onEntireChange: (value: boolean) => void;
  onRequiredChange: (value: boolean) => void;
  onOptionChange: (value: boolean) => void;
}
const ApplicantAgreement = ({
  isEntire,
  isRequired,
  isOption,
  onEntireChange,
  onRequiredChange,
  onOptionChange,
}: Props) => {
  return (
    <Container>
      <LabelCheckbox title="전체 약관 동의" value={isEntire} onChange={onEntireChange} />
      <DetailContent>
        <LabelCheckbox
          title="여행자 약관동의 (필수)"
          value={isRequired}
          onChange={onRequiredChange}
        />
        <LabelCheckbox
          title="특가 항공권 및 할인 혜택 안내동의 (선택)"
          value={isOption}
          onChange={onOptionChange}
        />
      </DetailContent>
    </Container>
  );
};

export default ApplicantAgreement;
