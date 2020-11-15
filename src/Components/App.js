import React, { Component } from "react";
import "./App.css";
import ReactFCCtest from "react-fcctest";
// const ms = require('pretty-ms')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainTime: 10,
      breakTime: 300
    };
    
    }


    handleStart = () => {
     
      this.timer = setInterval(
        () => this.tickDown(),
        1000
        )
    
  }

    handleStop = () => {
      clearInterval(this.timer)
    }

     handleReset = () => {
      clearInterval(this.timer)
       this.setState({
        mainTime: 1500,
        breakTime: 300
       })
     }
   
  tickDown = () => {
    this.setState((state) => ({
      mainTime: state.mainTime-1
    }))
    if (this.state.mainTime === 0) {

      clearInterval(this.timer)
      this.breakTimer = setInterval(
        () => this.breakTickDown(),
        1000
      )
  } 
  }

  breakTickDown = () => {
    this.setState((state) => ({
      breakTime: state.breakTime-1
    }))
    if (this.state.breakTime === 0) {

      clearInterval(this.timer)
    }
  }

  
  render() {

    return ( 
    <div className="App">
      <button onClick={this.handleStart}>start</button>
      <button onClick={this.handleStop}>stop</button>
      <button onClick={this.handleReset}>reset</button>
    <p>{Math.floor((this.state.mainTime)/60)} minutes and {this.state.mainTime % 60} seconds</p>



    </div>
    )
  }
}

export default App;
