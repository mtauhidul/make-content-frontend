import { Button } from '@mui/material';
import React from 'react';
import Logo from '../assets/logo.png';

const FirstStep = ({ stepChange, setUser }) => {
  const handleChange = (value) => {
    stepChange(2);
    setUser(value);
  };
  return (
    <div>
      <img src={Logo} alt='Logo' />
      <h3>Register</h3>
      <div>
        <Button onClick={() => handleChange('client')} variant='outlined'>
          Client
        </Button>
        <Button onClick={() => handleChange('copywriter')} variant='outlined'>
          Copywriter
        </Button>
      </div>
    </div>
  );
};

export default FirstStep;
