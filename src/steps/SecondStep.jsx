import React from 'react';
import Form from '../Components/Form';

const SecondStep = ({ stepChange, user }) => {
  const handleChange = (value) => {
    stepChange(value);
  };
  return (
    <div id='secondStepContainer'>
      <div>
        <Form user={user} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default SecondStep;
