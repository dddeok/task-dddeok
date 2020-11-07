import { useState } from 'react';
import { TouristEntity } from '../../utils/register.interface';
const useTourist = () => {
  const [ids, setIds] = useState<number[]>([0, 1]);
  const [entities, setEntities] = useState<TouristEntity>({
    0: {
      id: 0,
      firstName: { value: '', isValid: '' },
      lastName: { value: '', isValid: '' },
      korName: { value: '', isValid: '' },
      gender: { value: '', isValid: '' },
      birthday: { value: '', isValid: '' },
    },
    1: {
      id: 1,
      firstName: { value: '', isValid: '' },
      lastName: { value: '', isValid: '' },
      korName: { value: '', isValid: '' },
      gender: { value: '', isValid: '' },
      birthday: { value: '', isValid: '' },
    },
  });

  return {
    ids,
    entities,
    setIds,
    setEntities,
  };
};

export default useTourist;
