import React, { Component } from 'react';

import { MenuStyles } from './ButtonStyles';

import BoardSizeBtn from './BoardSizeBtn';

class BoardSizes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButtonId: 1
    }

    this.updateActive = this.updateActive.bind(this);
  }

  updateActive(id) {
    console.log(id);
    this.setState({
      activeButtonId: id
    })
  }
  
  render() {
    const sizeItems = this.props.sizes.map((size, i) => (
      <li key={size}>
        <BoardSizeBtn
          isActive={this.state.activeButtonId === i}
          updateActive={this.updateActive.bind(null, i)}
          size={size}
          changeSize={this.props.changeSize} />
      </li>
    ))

    return (
      <ul style={MenuStyles}>
        <h3>Board Size</h3>
        {sizeItems}
      </ul>
    )
  }
}

export default BoardSizes;