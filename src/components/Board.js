import React, { Component } from 'react';
import propTypes from 'prop-types';

import {rand} from '../util/util';
import Cell from './Cell';

import BoardStyles from '../styles/BoardStyles';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cellBtns: [[]]
    }

    this.handleCellClick = this.handleCellClick.bind(this);
  }

  componentDidMount() {
    const [rows, cols] = this.props.currentSize.split("x").map(num => parseInt(num, 10));
    const cells = this.createNewCells(rows, cols);
    this.setState({
      cellBtns: cells,
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentSize !== this.props.currentSize) {
      const [rows, cols] = nextProps.currentSize.split("x").map(num => parseInt(num, 10));      
      const cells = this.createNewCells(rows, cols)
      this.setState(() => ({
        cellBtns: cells,
      }), () => console.log(this.state.cellBtns))
    }
  }

  createNewCells(rows, cols) {
    const cells = new Array(rows).fill(new Array(cols).fill(0)).map(row => row.map(col => rand()))
    return cells;
  }

  handleCellClick(row, col) {
    const cells = this.state.cellBtns.slice(0);
    cells[row][col] = cells[row][col] === 0 ? 1 : 0
    this.setState({
      cellBtns: cells
    })
  }

  render() {
    const cellBtnsItems = this.state.cellBtns.map((row, rowIndex) => {
      return row.map((existence, colIndex) => {
        return (
          <Cell 
            key={rowIndex + "" + colIndex} 
            alive={existence} 
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