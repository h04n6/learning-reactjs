import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  // Array(9).fill() => [undefined, undefined, .. x9 items]
  // then .map((item, index)) will replace the undefined items with other objects.

  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
