import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { FormControl } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import {VolumeUp, VolumeDown} from '@mui/icons-material';



const VolumeCard = () =>{
    const[volume, setVolume] = useState(" ");
    const [notification, setNotification] = useState({
        online: " ",
    });
    const handleSound = (e, changeVolume) => {
        setVolume(changeVolume)
        if (changeVolume > 80){ setNotification({...notification, 
        volume: "Listening to music at a high volume could cause long-term hearing loss.",})
    } else { setNotification({...notification, volume: " "})
}
    };
    const marks = [
        {
          value: 0,
        },
        {
          value: 10,
        },
        {
          value: 20,
        },
        {
          value: 30,
        },
        {
            value: 40,
          },
          {
            value: 50,
          },
          {
            value: 60,
          },
          {
            value: 70,
          },
          {
            value: 80,
          },
          {
            value: 90,
          },
          {
            value: 100,
          },
      ];
      function valueFormat(value){
        return marks.findIndex((mark) => mark.value ===value)+1;
      };
 return (
    <Card>
        <Box>
  <React.Fragment>
    <CardContent>
     
      <Typography variant="h5" component="div">
        Master Volume
      </Typography>
      <Typography>Overrides all other sound settings in this application</Typography>
     <CardActions>
     <FormControl fullWidth>
        <VolumeDown/>
        <Slider size='medium' aria-label='medium' value={volume} onChange={handleSound} valueLabelDisplay="auto" step={null} marks={marks}/>
        <VolumeUp/>
        </FormControl>
    </CardActions>
    <Typography><h3>Volume Notification:</h3></Typography>
  <Typography sx={{fontSize: 25}} color="text.secondary" gutterBottom>
    {notification.volume}
  </Typography>
  </CardContent>
  </React.Fragment>
  </Box>
  </Card>
);
 
 }
export default VolumeCard;