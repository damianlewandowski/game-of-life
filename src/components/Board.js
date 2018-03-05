import React, { Component } from 'react';

import CellButton from './CellButton';

const BoardStyles = {
  minWidth: "720px",
  minHeight: "720px",
  width: '720px',
  height: '720px',
  border: '10px solid #333',
  boxShadow: '1px 0 10px #222, -1px 0 10px #222, 0 1px 10px #222, 0 -1px 10px #222',
  display: 'flex',
  flexWrap: 'wrap'
}

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cellBtns: []
    }
  }

  componentDidMount() {
    // Render cell buttons based on this.state.sizeMode
    this.setState({
      cellBtns: new Array(this.props.size).fill(new Array(this.props.size).fill(0))
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cellBtns: new Array(nextProps.size).fill(new Array(nextProps.size).fill(0))
    })
  }

  render() {
    const cellBtns = this.state.cellBtns.map((row, rowIndex) => {
      return row.map((cell, i) => <CellButton size={this.props.size} key={rowIndex + "" + i}/>)
    })

    return (
      <div style={BoardStyles}>
        {cellBtns}
      </div>
    );
  }
}

export default Board;