import React from 'react';
import propTypes from 'prop-types';

import MenuButton from './MenuButton';

import MenuStyles from '../styles/MenuStyles';

const Menu = (props) => {
  const styles = () => props.styles ? {...MenuStyles, ...props.styles} : {...MenuStyles}
  const btnStyles = () => props.btnStyles ? {...props.btnStyles} : {}
  return (
    <ul 
      style={styles()}>
      <h2>{props.menuTitle}</h2>
      <div style={btnStyles()}>
        {
          props.list.map((option, i) => {
            return (
              <li key={i}>
                <MenuButton 
                  content={option}
                  active={props.activeOption === option}
                  handleClick={props.updateFunc} />
              </li>
            )
          })
        }
      </div>
      
    </ul>
  )
}

Menu.propTypes = {
  menuTitle: propTypes.string,
  list: propTypes.array.isRequired,
  activeOption: propTypes.string.isRequired,
  updateFunc: propTypes.func.isRequired,
  styles: propTypes.object,
  btnStyles: propTypes.object,
}

export default Menu;