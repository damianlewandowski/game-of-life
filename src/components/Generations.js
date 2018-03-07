import React from 'react';
import propTypes from 'prop-types';

import GenerationsStyles from '../styles/GenerationsStyles';

const Generations = (props) => (
  <p style={GenerationsStyles}>Generations: {props.generations}</p>
)

Generations.propTypes = {
  generations: propTypes.number
}

export default Generations;