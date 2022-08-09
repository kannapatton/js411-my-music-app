import React, {useState} from 'react';

import Switch from '@mui/material/Switch';
import { Card, CardActions, CardContent, Box, Typography} from '@mui/material';
import { NotificationsNone } from '@mui/icons-material';
const OnlineCard= () =>{
  const [online, setOnline] = useState({
    isOnline: true,
    offLine: false
  });
  const [ notification, setNotification] = useState({
    online: " "
  });
const handleOnline = (e) => { 
  setOnline({...online, [e.target.name]: e.target.checked})
  if(!e.target.checked){
    setNotification({
      ...notification,
      online: "Your appliation is offline. You won't be able to share or stream music to other devices", 
    });
  }else {
    setNotification({ ...NotificationsNone, online:" "});
  }
  };

  return (
    <Card>
      <Box>
        <CardContent>
          <Typography variant= 'h3'>
            Welcome User!
          </Typography>
          <CardActions>
      <Switch checked={online.isOnline} onChange={handleOnline} name="isOnline" inputProps={{
        "aria-label":"secondary checkbox"}}/>
        </CardActions>
        <h3>System Notifcations:</h3>
     <Typography sx={{ fontsize:20}} color="text.secondary" gutterBottom>
      {notification.online}
     </Typography>
     </CardContent>
     </Box>
     </Card>

         
  
  );
}

export default OnlineCard;