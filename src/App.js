import './App.css';
import React, {Component} from 'react';
import ButtonAppBar from './ButtonAppBar';
import Dashboard from './components/Dashboard.js';
import{LoginScreen} from './LoginScreen';
class App extends Component {
  constructor(){
    super()
    this.state ={
      loggedin: false
    }
  };
  handleSubmit = (e) =>{
     
    this.setState({loggedin : true}) 
    
    //console.log('you clicked me');
  };
  handleOnline = (e) =>{
    let status = this.state.loggedin=== true ? false : true
    // console.log ('you are online');
  };

  render(){
    return !this.state.loggedin ?(

      <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <header className="App-header">
      <p> Please Log In</p>
     
      <br></br>
      <br></br>
      <LoginScreen handleSubmit={this.handleSubmit}></LoginScreen>
      </header>
      </div>
    )
    :(
      <div className='welcome' >
    
         <ButtonAppBar></ButtonAppBar>
        <div className='hi'><h1>Welcome User!</h1></div>
      <div className= "Dash">
        
        <Dashboard></Dashboard>
      {/* <OnlineCard handleOnline={this.handleOnline}></OnlineCard> */}
      </div></div> 
      );
    
  }
}

export default App;
