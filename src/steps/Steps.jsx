import React, { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const Steps = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState('client');

  const stepChange = (value) => {
    setStep(value);
  };

  return (
    <div>
      {step === 1 && <FirstStep stepChange={stepChange} setUser={setUser} />}
      {step === 2 && <SecondStep stepChange={stepChange} user={user} />}
      {step === 3 && <ThirdStep stepChange={stepChange} />}
    </div>
  );
};

export default Steps;
