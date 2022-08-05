import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export function Login(props) {
  const[loggedin, login]=useState(false)
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="User Name" variant="standard" />
      <TextField id="standard-basic" label="Password" variant="standard" />
    
    </Box>
  );
}
