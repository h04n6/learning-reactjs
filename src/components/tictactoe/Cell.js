import React from "react";

// // object destructuring
// const student = {
//   name: "hwang",
//   age: 29,
// };
//*** INSTEAD OF */
// const name = student.name;
// const age = student.age;
// // using object destructuring
// const { name, age } = student;

// INSTEAD OF
const Cell = ({ value, onClick }) => {
  // equivalent to
  // const { value, onClick } = props;
  return (
    <div className={`game-cell is-${value ?? "blank"}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
