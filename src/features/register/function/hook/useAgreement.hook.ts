import { useState } from 'react';

const useAgreement = () => {
  const [entire, setEntire] = useState(false);
  const [required, setRequired] = useState(false);
  const [option, setOption] = useState(false);

  function onEntireChange(checked: boolean) {
    if (checked) {
      setEntire(true);
      setRequired(true);
      setOption(true);
    } else {
      setEntire(false);
      setRequired(false);
      setOption(false);
    }
  }

  function onRequiredChange(checked: boolean) {
    setRequired(checked);
  }
  function onOptionChange(checked: boolean) {
    setOption(checked);
  }

  return {
    entire,
    required,
    option,
    onEntireChange,
    onRequiredChange,
    onOptionChange,
  };
};

export default useAgreement;
