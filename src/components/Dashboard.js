import  React from 'react';
// import ButtonAppBar from '../ButtonAppBar';
// import App from '../App';
import  OnlineCard  from './OnlineCard';
import VolumeCard from './VolumeCard';
import SoundQualityCard from './SoundQualityCard';


const DashBoard =()=> {
return(

    <div className='dashContainer'>
       
     <div className='Online'>
     {/* CARD 1 - ONLINE MODE */}
       
         <div className='online'>
        <OnlineCard></OnlineCard>
        </div>
     </div>
     {/* <OnlineCard handleOnline={props.handleOnline}></OnlineCard>  */}
<div className='Volume'>
    <VolumeCard></VolumeCard>
</div>
<div className='SoundQuality'>
    <SoundQualityCard></SoundQualityCard>
</div>
{/* //  
// card 2- master volume

// card 3- sound quality */}
{/* //system notifications */}
</div>
);
}
export default DashBoard;