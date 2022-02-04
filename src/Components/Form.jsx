import { Autocomplete, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const locations = ['Poland', 'Netherland', 'Finland'];

const Form = ({ user, handleChange }) => {
  const [company, setCompany] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleChange(3);
  };

  console.log(errors);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div id='formWrapper'>
      <Switch
        onChange={() => (company ? setCompany(false) : setCompany(true))}
        {...label}
      />

      <label htmlFor=''>Company Account?</label>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Name'
          {...register('Name', { required: true })}
        />
        <input
          type='text'
          placeholder='Surname'
          {...register('Surname', { required: true })}
        />
        <input
          type='text'
          placeholder='Email'
          {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        />

        <Autocomplete
          // {...register('Location', { required: true })}
          disablePortal
          id='combo-box-demo'
          options={locations}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} />}
        />
        <input
          type='password'
          placeholder='Password'
          {...register('Password', {
            required: true,
            pattern: /^[A-Za-z]\w{7,14}$/i,
          })}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          {...register('Confirm Password', { required: true })}
        />
        {company && (
          <div>
            <input
              type='text'
              placeholder='Company Name'
              {...register('Company Name', { required: true })}
            />
            <input
              type='text'
              placeholder='VAT Number'
              {...register('VAT Number', { required: true })}
            />
            <input
              type='text'
              placeholder='Street'
              {...register('Street', { required: true })}
            />
            <input
              type='text'
              placeholder='Apartment Number'
              {...register('Apartment Number', { required: true })}
            />
            <input
              type='text'
              placeholder='City'
              {...register('City', { required: true })}
            />
            <input
              type='text'
              placeholder='Zip'
              {...register('Zip', { required: true })}
            />
          </div>
        )}
        {user === 'copywriter' && (
          <textarea {...register('Sample Text', { required: true })} />
        )}
        <br />
        <div id='agreement'>
          <input
            type='checkbox'
            placeholder='I agree to the terms and policy'
            {...register('I agree to the terms and policy', { required: true })}
          />

          <label htmlFor=''>I agree to the terms and policy</label>
        </div>
        <br />

        <input type='submit' />
      </form>
    </div>
  );
};

export default Form;
