import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
      this.state = {
        green: 0,
        red: 0,
        blue: 0,
    }
  }

  green = () => {
    const { green } = this.state;
    this.setState((anterior, _props) => ({
      green: anterior.green + 1,
    }), () => {
      console.log(this.btnColor(green))
    })
  }

  red = () => {
    const { red } = this.state;
    this.setState((anterior, _props) => ({
      red: anterior.red + 1,
    }), () => {
      console.log(this.btnColor(red))
    })
  }

  blue = () => {
    const { blue } = this.state;
    this.setState((stateAnterior, _props) => ({
      blue: stateAnterior.blue + 1,
    }), () => {
      console.log(this.btnColor(blue))
    })
  }

  btnColor = (number) => {
    return number % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { green, red, blue } = this.state
    return ( 
      <div>
    <button style={{backgroundColor: this.btnColor(blue)}} onClick={this.blue}>Clickes: {blue}</button>
    <button style={{backgroundColor: this.btnColor(red)}} onClick={this.red}>Clickes: {red}</button>
    <button style={{backgroundColor: this.btnColor(green)}} onClick={this.green}>Clickes: {green}</button>
      </div>
    );
 }
}

export default App;
