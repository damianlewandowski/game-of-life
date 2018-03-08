import React, { Component } from 'react';

import Generations from './components/Generations';
import Menu from './components/Menu';
import Board from './components/Board';

import {GAME_OPTIONS, SIZES_OPTIONS, SPEED_OPTIONS} from './constants';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      generations: 0,                   // Passed to Generations component. Responsible for displaying accurate generation number.
      currentSize: SIZES_OPTIONS[0],    // Passed to BoardSizeOptions component. Responsible for board's current size
      currentSpeed: SPEED_OPTIONS[0],   // Passed to SpeedOptions component. Responsible for speed of game of life
      currentGameMode: GAME_OPTIONS[0], // Passed to Board component. Responsible for starting, stopping and clearing the board
      intervalId: -1,                   // Returned by setInterval in Board component. 
      startGame: false,                  // Passed to Board component. Responsible for running playSingleGeneration function
    }

    this.updateGenerations = this.updateGenerations.bind(this);
    this.updateCurrentSize = this.updateCurrentSize.bind(this);
    this.updateCurrentSpeed = this.updateCurrentSpeed.bind(this);
    this.updateCurrentGameMode = this.updateCurrentGameMode.bind(this);
    this.updateIntervalId = this.updateIntervalId.bind(this);
    this.updateStartGame = this.updateStartGame.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  updateGenerations(reset=0) {
    this.setState((prevState) => ({
      generations: reset ? 0 : prevState.generations + 1
    }))
  }

  // Update current size from the SizesMenu ---> MenuButton
  updateCurrentSize(size) {
    if(size !== this.state.currentSize) {
      // Reset generations
      this.updateGenerations(1)
    }

    this.setState(() => ({
      currentSize: size,
    }), )
  }

  // Update current simulation speed from the SpeedMenu ---> MenuButton
  updateCurrentSpeed(speed) {
    this.setState(() => ({
      currentSpeed: speed
    }), () => {
      if(this.state.intervalId !== -1) {
        clearInterval(this.state.intervalId);
        this.setState(() => ({
          startGame: true,
        }))
      }
    })
  }

  updateCurrentGameMode(gameMode) {
    if(gameMode === "START") {
      this.handleStart();
    } else if(gameMode === "PAUSE") {
      this.handlePause()
    }

    this.setState(() => ({
      currentGameMode: gameMode,
    }))
  }

  handlePause() {
    if(this.state.intervalId !== -1) {
      clearInterval(this.state.intervalId);
    }
  }

  handleStart() {
    this.setState(() => ({
      startGame: true,
    }))
  }

  updateIntervalId(id) {
    this.setState(() => ({
      intervalId: id,
    }))
  }

  updateStartGame() {
    this.setState((prevState) => ({
      startGame: false
    }))
  }

  render() {
    return (
      <div className="App">
        <main>
        <Generations generations={this.state.generations}/>
        
        <div className="middle">
          <Menu
            menuTitle="Size"
            list={SIZES_OPTIONS}
            activeOption={this.state.currentSize}
            updateFunc={this.updateCurrentSize}/>

          <Board
            currentGameMode={this.state.currentGameMode}
            updateGenerations={this.updateGenerations}
            updateStartGame={this.updateStartGame}
            startGame={this.state.startGame}
            intervalId={this.state.intervalId}
            updateIntervalId={this.updateIntervalId}
            currentSpeed={this.state.currentSpeed}
            currentSize={this.state.currentSize}/>

          <Menu
            menuTitle="Speed"
            list={SPEED_OPTIONS}
            activeOption={this.state.currentSpeed}
            updateFunc={this.updateCurrentSpeed}/>
        </div>
          
          
          <Menu
            menuTitle="Options"
            list={GAME_OPTIONS}
            activeOption={this.state.currentGameMode}
            updateFunc={this.updateCurrentGameMode}
            styles={{display: "flex", justifyContent: "space-around", width: "720px", marginTop: "6px"}}
            btnStyles={{display: "flex"}}/>
        </main>
      </div>
    )
  }
}

export default App;