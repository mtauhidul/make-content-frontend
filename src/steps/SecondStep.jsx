import { Button } from '@mui/material';
import React from 'react';
import Form from '../Components/Form';

const SecondStep = ({ stepChange, user }) => {
  const handleChange = (value) => {
    stepChange(value);
  };
  return (
    <div>
      <div>
        <Form user={user} />
      </div>
      <div>
        <Button onClick={() => handleChange(1)} variant='outlined'>
          Previous
        </Button>
        <Button onClick={() => handleChange(3)} variant='outlined'>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
