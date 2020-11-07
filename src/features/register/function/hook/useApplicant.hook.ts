import { useState } from 'react';
import { Applicant } from '../../utils/register.interface';

const useApplicant = () => {
  const [applicant, setApplicant] = useState<Applicant>({
    userName: { value: '', isValid: '' },
    phoneNumber: { value: '', isValid: '' },
    reservation: { value: '', isValid: '' },
  });

  return {
    applicant,
    setApplicant,
  };
};

export default useApplicant;
