import React, { Component } from 'react';
import logo from './worldwide.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isStringManipulator : Boolean = false
    };
  }
  startManipulator = () =>{
    this.state.isStringManipulator = true;
  }


  render() {
    return (
      <div className="App">
        <header className="this.state.isStringManipulator? hide : App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code className="this.state.isStringManipulator? hide : AppName">String Manipulator</code>
          </p>
         
            <button className="this.state.isStringManipulator? hide : buttonColor" onClick="startManipulator">Start here!</button>
        </header>
      </div>
    );
  }
}

export default App;
