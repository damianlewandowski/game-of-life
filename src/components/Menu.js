import React, { Component } from 'react';

const GameOptionsStyle = {
  display: "flex",
  justifyContent: "space-between",
  listStyle: "none",
}

const GameOptions = () => (
  <ul style={GameOptionsStyle}>
    <h3>Game</h3>
    <li><button>RUN</button></li>
    <li><button>PAUSE</button></li>
    <li><button>CLEAR</button></li>
  </ul>
)

const GameSpeed = () => (
  <ul>
    <h3>Sim Speed</h3>
    <li>SLOW</li>
    <li>MEDIUM</li>
    <li>FAST</li>
  </ul>
)



class Menu extends Component {
  state = {  }
  render() {
    return (
      <div>

      <GameOptions />
        
        
      <GameSpeed />
        

      </div>
    );
  }
}

export default Menu;