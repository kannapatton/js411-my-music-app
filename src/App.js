import './App.css';
import React, {Component} from 'react';
import ButtonAppBar from './ButtonAppBar';
import { OutlinedButtons } from './OutlinedButtons';
import{Login} from './Login';
class App extends Component {
  constructor(){
    super()
    this.state ={
      loggedin: true
    }
  };
  handleCick = () =>{
    this.state.isCllicked ? 
    this.setState({loggedin : true}) : this.setState({loggedin : false})
  }
  render(){
    return !this.state.loggedin ?(
      <p> Please Log In</p>
    )
    :(
      <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <header className="App-header">
      <Login></Login> 
      <br></br>
      <br></br>
      <OutlinedButtons onClick={(e)=> {this.handleCick(e)}}></OutlinedButtons>
      </header>
    </div>
    )
  }
}

export default App;
