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
  }

  componentDidMount() {
    const [rows, cols] = this.props.currentSize.split("x").map(num => parseInt(num, 10));
    const cells = this.createNewCells(rows, cols);
    console.log(cells);
    this.setState(() => ({
      cellBtns: cells,
    }), () => setInterval(this.playGeneration, 20));
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentSize !== this.props.currentSize) {
      const [rows, cols] = nextProps.currentSize.split("x").map(num => parseInt(num, 10));      
      const cells = this.createNewCells(rows, cols)
      this.setState(() => ({
        cellBtns: cells,
      }))
    }
  }

  createNewCells(rows, cols) {
    const cells = new Array(rows).fill(new Array(cols).fill(0)).map(row => row.map(col => rand()))
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
    const newCells = this.state.cellBtns.map(rows => rows.map(col => col));
    
    console.log(newCells);
    for(let row = 0; row < this.state.cellBtns.length; row++) {
      for(let col = 0; col < this.state.cellBtns[row].length; col++) {

        // if(row === 2 && col === 2) {
        //   console.log(this.state.cellBtns)  
        // }
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
  currentSize: propTypes.string,
}

export default Board;