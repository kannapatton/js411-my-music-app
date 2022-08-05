import './App.css';
import React, {Component} from 'react';
import ButtonAppBar from './ButtonAppBar';
import { OutlinedButtons } from './OutlinedButtons';
import Dashboard from './components/Dashboard.js';
import{Login} from './Login';
class App extends Component {
  constructor(){
    super()
    this.state ={
      loggedin: false
    }
  };
  handleClick = (e) =>{
    // this.state.isCllicked ? 
    this.setState({loggedin : true}) 
    // : this.setState({loggedin : false})
    console.log('you clicked me');
  }
  render(){
    return !this.state.loggedin ?(

      <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <header className="App-header">
      <p> Please Log In</p>
      <Login></Login> 
      <br></br>
      <br></br>
      <OutlinedButtons handleClick={this.handleClick}></OutlinedButtons>
      </header>
      </div>
    )
    :(
      <Dashboard></Dashboard>
      )
    
  }
}

export default App;
