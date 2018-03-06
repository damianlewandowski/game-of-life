import React, { Component } from 'react';

import { getStyles } from './ButtonStyles';


class SimSpeedBtn extends Component {
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
    this.props.changeSpeed(this.props.speed)
    this.props.updateActive()
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={getStyles(this.props.isActive, this.state.hovered)}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}>{`${this.props.speed}`}</button>
    )
  }
}

export default SimSpeedBtn;