import { Button } from '@mui/material';
import React from 'react';
import Form from '../Components/Form';

const SecondStep = ({ stepChange, user }) => {
  const handleChange = (value) => {
    stepChange(value);
  };
  return (
    <div id='secondStepContainer'>
      <div
        style={{ width: '100%', backgroundColor: '#fff', padding: '10px 0px' }}>
        <Button
          style={{ marginTop: '20px', marginLeft: '50px' }}
          onClick={() => handleChange(1)}
          variant='outlined'>
          Previous
        </Button>
      </div>
      <br />
      <div>
        <Form user={user} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default SecondStep;
