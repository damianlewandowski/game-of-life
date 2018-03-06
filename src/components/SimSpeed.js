import React, { Component } from 'react';

import { MenuStyles } from './ButtonStyles';
import SimSpeedBtn from './SimSpeedBtn';

class SimSpeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeButtonId: 1
    }

    this.updateActive = this.updateActive.bind(this);
  }

  updateActive(id) {
    this.setState({
      activeButtonId: id
    })
  }
  
  render() {
    const simItems = this.props.speeds.map((speed, i) => (
      <li key={speed}>
        <SimSpeedBtn
          speed={speed}
          isActive={this.state.activeButtonId === i}
          updateActive={this.updateActive.bind(null, i)}
          changeSpeed={this.props.changeSpeed} />
      </li>
    ))

    return (
      <ul style={MenuStyles}>
        <h3>Sim Speed</h3>
        {simItems}
      </ul>
    )
  }
}

export default SimSpeed;