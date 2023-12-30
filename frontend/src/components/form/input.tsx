import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const InputTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fFF',
    border: '1px solid rgba(0,0,0,1)',
    fontFamily: "'Udemy_Sans_Bold', sans-serif",


    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused ': {
      border: '2px solid rgba(0,0,0,1)',
    },
  },
  '& .MuiOutlinedInput-input': {
    fontSize: '15px',
    marginTop:"10px",
    fontWeight: 'medium',
    fontFamily: "'Udemy_Sans_Bold', sans-serif",

  },
  '& .MuiInputLabel-root': {
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'var(--dark-1)',
    fontFamily: "'Udemy_Sans_Bold', sans-serif",

  },
  '& .MuiInputLabel-root.Mui-focused': {
    fontWeight: 'bold',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(12px, 7px) scale(0.8)',
    fontWeight: "normal"
  },
}));


const FormInput= ({ ...props }) => {
  return (
    <InputTextField
      {...props}
      variant="outlined"
      fullWidth
    />
  );
};

export default FormInput;
