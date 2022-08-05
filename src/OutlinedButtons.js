import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function OutlinedButtons(props) {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="outlined" onClick={props.handleClick}>Login</Button>
      
   
      
    </Stack>
  );
}
