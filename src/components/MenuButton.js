import React, { Component } from 'react';
import propTypes from 'prop-types';

import {ButtonActive, ButtonHoverStyles, ButtonStyles} from '../styles/MenuButtonStyles';

class MenuButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    }

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState((prevState) => ({
      hovered: !prevState.hovered
    }))
  }

  // Based on whether button is hovered on or active, change styles. 
  getStyles() {
    if(this.props.active) {
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
        style={this.getStyles()}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onClick={this.props.handleClick.bind(null, this.props.content)}>
        {this.props.content}
      </button>
    )
  }
}

MenuButton.propTypes = {
  active: propTypes.bool,
  content: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]),
  handleClick: propTypes.func.isRequired,
}

export default MenuButton;