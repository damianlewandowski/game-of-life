import React, { Component } from 'react';

import Menu from './components/Menu';
import Board from './components/Board';
import BoardSizes from './components/BoardSizes';

import './App.css';

const BOARD_SIZES = [25, 50, 100];

class App extends Component {
  constructor() {
    super()

    this.state = {
      sizeMode: 50,      // Possible sizes: 25x25, 50x50, 100x100
    }

    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  handleSizeChange(size) {
    this.setState({
      sizeMode: size,
    })
  }

  render() {
    return (
      <div className="App">
        <main>
          <BoardSizes sizes={BOARD_SIZES} changeSize={this.handleSizeChange}/>
          <Board size={this.state.sizeMode} />
          <Menu />
        </main>
      </div>
    );
  }
}

export default App;
