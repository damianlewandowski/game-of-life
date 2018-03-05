import React, { Component } from 'react';
import BoardSizeBtn from './BoardSizeBtn';

const BoardSizesStyles = {
  marginRight: "6px",
  color: "#fff",
  textShadow: "1px 0 #222, -1px 0 #222, 0 1px #222, 0 -1px #222",
  fontSize: "2rem",
  listStyle: "none",
}

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
          currentSize={this.props.currentSize}
          size={size} 
          changeSize={this.props.changeSize} />
      </li>
    ))

    return (
      <ul style={BoardSizesStyles}>
        <h3>Board Size</h3>
        {sizeItems}
      </ul>
    )
  }
}

export default BoardSizes;