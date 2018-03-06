import React, { Component } from 'react';

import SimSpeed from './components/SimSpeed';
import Board from './components/Board';
import BoardSizes from './components/BoardSizes';
import GameOptions from './components/GameOptions';

import './App.css';

const BOARD_SIZES = [25, 50, 100];
const SIM_SPEEDS = ["SLOW", "MEDIUM", "FAST"];
const GAME_OPTIONS = ["START", "STOP", "CLEAR"]

class App extends Component {
  constructor() {
    super()

    this.state = {
      sizeMode: 50,      
      speedMode: "MEDIUM",
      gameMode: "START",
    }

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.handleGameModeChange = this.handleGameModeChange.bind(this);
  }

  handleSpeedChange(speed) {
    this.setState({speedMode: speed});
  }

  handleSizeChange(size) {
    this.setState({
      sizeMode: size,
    })
  }

  handleGameModeChange(gameMode) {
    this.setState({
      gameMode
    })
  }

  render() {
    return (
      <div className="App">
        <main>

          <p>Generations: 5</p>
          <div className="middle">
            <BoardSizes 
              currentSize={this.state.sizeMode}       // For adding and removing active class
              sizes={BOARD_SIZES} 
              changeSize={this.handleSizeChange}/>
            <Board size={this.state.sizeMode} />
            <SimSpeed 
              changeSpeed={this.handleSpeedChange}
              currentSpeed={this.state.speedMode}
              speeds={SIM_SPEEDS} />
          </div>
          
            
          <GameOptions
            changeOption={this.handleGameModeChange}
            currentOption={this.state.currentOption}
            options={GAME_OPTIONS}/>
        </main>
      </div>
    );
  }
}

export default App;
