import React, { Component } from 'react';

import {ButtonStyles, ButtonHoverStyles} from './ButtonStyles';

class BoardSizeBtn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hovered: false,
      active: false,
    }
    
    this.toggleHover = this.toggleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleHover() {
    this.setState((prevState) => {
      return {hovered: !prevState.hovered}
    })
  }

  handleClick() {
    this.props.changeSize(this.props.size)
    this.setState((prevState) => {
      return {active: !prevState.active}
    })
  }

  render() {
    const currentStyles = this.state.hovered ? {...ButtonStyles, ...ButtonHoverStyles} : ButtonStyles;
    
    return (
      <button
        onClick={this.handleClick}
        style={currentStyles}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>{`${this.props.size}x${this.props.size}`}</button>
    )
  }
}

export default BoardSizeBtn;