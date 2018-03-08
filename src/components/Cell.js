import React from 'react';
import propTypes from 'prop-types';

import {alive, dead, cell25, cell50, cell100} from '../styles/CellStyles';

const Cell = (props) => {
  function getStyles() {
    if(props.existence) {
      return alive;
    } 
    return dead;
  }

  function getSizeStyles() {
    const size = parseInt(props.currentSize.split("x")[0], 10);
    switch(size) {
      case 25:
        return cell25;
      case 50:
        return cell50;
      case 100:
        return cell100;
      default:
        return cell25;
    }
  }

    return (
      <button 
        style={{...getStyles(), ...getSizeStyles()}}
        onClick={props.handleClick}></button>
    );

}




Cell.propTypes = {
  existence: propTypes.number,
  handleClick: propTypes.func,
  currentSize: propTypes.string
}

export default Cell;