import React, { Component } from 'react';

const CellButonStyles = {
  background: "#fff",
  border: "1px solid #555"
}

const CellBtn25 = {
  width: "4%",
  height: "4%",
}

const CellBtn50 = {
  width: "2%",
  height: "2%",
}

const CellBtn75 = {
  width: "1.325%",
  height: "1.325%",
}

const CellBtn100 = {
  width: "1%",
  height: "1%",
}

class CellButton extends Component {

  getSizeStyle(size) {
    switch(size) {
      case 25: return CellBtn25;
      case 50: return CellBtn50;
      case 75: return CellBtn75;
      case 100: return CellBtn100;
      default: return CellBtn50;
    }
  }

  render() {
    const sizeStyle = this.getSizeStyle(this.props.size);

    return (
      <button style={{
        ...CellButonStyles,
        ...sizeStyle
        }}
      >
      </button>
    )
  }
}

export default CellButton;