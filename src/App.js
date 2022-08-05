import './App.css';
import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import { OutlinedButtons } from './OutlinedButtons';
import{Login} from './Login';
function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <header className="App-header">
      <Login></Login> 
      <br></br>
      <br></br>
      <OutlinedButtons></OutlinedButtons>
      </header>
    </div>
  );
}

export default App;
