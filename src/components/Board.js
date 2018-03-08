import React, { Component } from 'react';
import propTypes from 'prop-types';

import {rand} from '../util/util';
import { checkNeighbours } from '../util/neighbours';

import Cell from './Cell';

import BoardStyles from '../styles/BoardStyles';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cellBtns: [],
      playGenerationId: -1,
    }

    this.handleCellClick = this.handleCellClick.bind(this);
    this.playGeneration = this.playGeneration.bind(this);
    this.getSpeed = this.getSpeed.bind(this);
    this.beginGame = this.beginGame.bind(this);
  }

  componentDidMount() {
    const [rows, cols] = this.props.currentSize.split("x").map(num => parseInt(num, 10));
    const cells = this.createNewCells(rows, cols);

    this.setState(() => ({
      cellBtns: cells,
    }), () => this.props.updateIntervalId(this.beginGame()));
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentSize !== this.props.currentSize) {
      const [rows, cols] = nextProps.currentSize.split("x").map(num => parseInt(num, 10));      
      const cells = this.createNewCells(rows, cols)
      this.setState(() => ({
        cellBtns: cells,
      }))
    }

    if(nextProps.startGame) {
      this.props.updateIntervalId(this.beginGame())
      this.props.updateStartGame();
    }

    if(nextProps.currentGameMode === "CLEAR") {
      this.handleClear();
    }
  }
      
  beginGame() {
    // Send id returned from setInterval function to App.js component.
    // Used for calling clearInterval when user changes specific option like sim speed (e.g. slow)
    return setInterval(this.playGeneration, 1000 / this.getSpeed());
  }

  getSpeed() {
    switch(this.props.currentSpeed) {
      case "SLOW":        
        return 1;
      case "MEDIUM":
        return 4;
      case "FAST":
        return 6;
      default: 
        return 1;
    }
  }

  createNewCells(rows, cols) {
    const cells = new Array(rows).fill(new Array(cols).fill(0)).map(row => row.map(col => rand()))
    return cells;
  }

  createDeadCells(rows, cols) {
    const cells = new Array(rows).fill(new Array(cols).fill(0)).map(row => row.map(col => rand(true)))
    return cells;
  }

  handleCellClick(row, col) {
    const cells = this.state.cellBtns.slice(0);
    cells[row][col] = cells[row][col] ? 0 : 1;
    
    this.setState({
      cellBtns: cells
    })
  }

  playGeneration() {
    const newCells = this.state.cellBtns.map(rows => rows.slice(0));
    
    for(let row = 0; row < this.state.cellBtns.length; row++) {
      for(let col = 0; col < this.state.cellBtns[row].length; col++) {
        const neighbours = checkNeighbours(row, col, this.state.cellBtns);
        
        switch(neighbours) {
          case 0:
          case 1:
            newCells[row][col] = 0;
            break;
          case this.state.cellBtns[row][col] && 2:
          case 3:
            newCells[row][col] = 1;
            break;
          default:
            newCells[row][col] = 0;
        }
      }
    }

    this.setState(() => ({
      cellBtns: newCells
    }), () => this.props.updateGenerations())
  }

  handleClear() {
    clearInterval(this.props.intervalId);

    const [rows, cols] = this.props.currentSize.split("x").map(num => parseInt(num, 10));
    const cells = this.createDeadCells(rows, cols)
    this.setState(() => ({
      cellBtns: cells,
    }))
  }

  render() {
    const cellBtnsItems = this.state.cellBtns.map((row, rowIndex) => {
      return row.map((existence, colIndex) => {
        return (
          <Cell 
            key={rowIndex + "" + colIndex} 
            existence={existence} 
            handleClick={this.handleCellClick.bind(null, rowIndex, colIndex)}
            currentSize={this.props.currentSize} />        
        )
      })
    })

    return (
      <div
        style={BoardStyles}>
        {cellBtnsItems}
      </div>
    )
  }
}

BoardStyles.propTypes = {
  intervalId: propTypes.number.isRequired,
  updateGenerations: propTypes.func.isRequired,
  updateStartGame: propTypes.func.isRequired,
  updateIntervalId: propTypes.func.isRequired,
  startGame: propTypes.bool.isRequired,
  currentSpeed: propTypes.string.isRequired,
  currentSize: propTypes.string.isRequired,
  currentGameMode: propTypes.string.isRequired,
}

export default Board;