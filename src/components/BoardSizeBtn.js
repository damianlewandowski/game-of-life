import React, { Component } from 'react';

import {ButtonStyles, ButtonHoverStyles, ButtonActive} from './ButtonStyles';

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
    this.props.updateActive()
  }

  getStyles() {
    if(this.props.isActive) {
      return {...ButtonStyles, ...ButtonActive};
    } else if(this.state.hovered) {
      return {...ButtonStyles, ...ButtonHoverStyles}
    } else {
      return ButtonStyles;
    }
  }

  render() {
    
    return (
      <button
        onClick={this.handleClick}
        style={this.getStyles()}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>{`${this.props.size}x${this.props.size}`}</button>
    )
  }
}

export default BoardSizeBtn;