import React, { Component } from 'react';

import { MenuStyles } from './ButtonStyles';
import GameOptionsBtn from './GameOptionsBtn';

const GameOptionsStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "720px",
  margin: "8px 0 0 0",  
}

class GameOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButtonId: 1
    }

    this.updateActive = this.updateActive.bind(this);
  }

  updateActive(id) {
    this.setState({
      activeButtonId: id
    })
  }
  
  render() {
    const optionsItems = this.props.options.map((option, i) => (
      <li key={option}>
        <GameOptionsBtn
          option={option}
          isActive={this.state.activeButtonId === i}
          updateActive={this.updateActive.bind(null, i)}
          changeOption={this.props.changeOption} />
      </li>
    ))

    return (
      <ul style={{...MenuStyles, ...GameOptionsStyle}}>
        <h3>Game Options</h3>
        {optionsItems}
      </ul>
    )
  }
}

export default GameOptions;