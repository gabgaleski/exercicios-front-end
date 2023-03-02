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
    this.setState((anterior, _props) => ({
      green: anterior.green + 1,
    }))
  }

  red = () => {
    this.setState((anterior, _props) => ({
      red: anterior.red + 1,
    }))
  }

  blue = () => {
    this.setState((stateAnterior, _props) => ({
      blue: stateAnterior.blue + 1,
    }))
  }

  render() {
    const { green, red, blue } = this.state
    return ( 
      <div>
    <button onClick={this.blue}>Clickes: {blue}</button>
    <button onClick={this.red}>Clickes: {red}</button>
    <button onClick={this.green}>Clickes: {green}</button>
      </div>
    );
 }
}

export default App;
