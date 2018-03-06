import React, { Component } from 'react';

import { getStyles } from './ButtonStyles';

const GameOptionsBtnStyles = {
  width: "150px",
}

class GameOptionsBtn extends Component {
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
    this.props.changeOption(this.props.option)
    this.props.updateActive()
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{...getStyles(this.props.isActive, this.state.hovered), ...GameOptionsBtnStyles}}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>{`${this.props.option}`}</button>
    )
  }
}

export default GameOptionsBtn;