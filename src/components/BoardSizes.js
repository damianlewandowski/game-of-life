import React, { Component } from 'react';
import BoardSizeBtn from './BoardSizeBtn';

const BoardSizesStyles = {
  marginRight: "6px",
  color: "#fff",
  textShadow: "1px 0 #222, -1px 0 #222, 0 1px #222, 0 -1px #222",
  fontSize: "2rem",
  listStyle: "none",
}

const BoardSizes = (props) => {

  const sizeItems = props.sizes.map(size => (
    <li key={size}>
      <BoardSizeBtn size={size} changeSize={props.changeSize} />
    </li>
  ))

  return (
    <ul style={BoardSizesStyles}>
      <h3>Board Size</h3>
      {sizeItems}
    </ul>
  )
}

export default BoardSizes;