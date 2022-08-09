import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';

export function LoginScreen(props) {
  // const[loggedin, login]=useState(false)
  return (
    <React.Fragment>
      
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <h1, <h2, <p and <span are for display and <form,<input, <select, and <textarea collect infomration from user */}
      <TextField required id="standard-basic" label="Username" variant="standard" />
      <TextField required id="standard-basic"  label="Password" variant="standard" />
     
  
    <Stack direction="row" spacing={1}>
      <Button variant="outlined" onClick={props.handleSubmit}>Login</Button>
      </Stack>
      </Box>
     

    </React.Fragment>
  );
}
