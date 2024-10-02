import React, { useState } from "react";
import "./ToggleStyles.css";

// // stateless functional component: component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }

// // stateful functional component: component có sử dụng state
// function ToggleWithState() {
//   // const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }

// ** State nó là của riêng component và được kiểm soát hoàn toàn bởi chúng **//
// ** State có thể thay đổi được và mỗi khi state thì đổi thì component đó sẽ được render lại **//

// ** useState là một hook
// ** useState KHÔNG được viết ở trong function, loop, condition sentence.

function Toggle() {
  // 1. enabling state: useState(initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state:
  // 4. update state

  //   const array = useState(false);
  //   console.log(array); // [false,(f) ~ function]
  //   console.log(array[0]);
  //   console.log(array[1]);
  //   const [a, b] = [1, 2]; -- destructuring array in ES6
  //   console.log(a, b);
  // initialize value: boolean(true, false), number(1,2,3,4), string(1,2,3,4), string("hwangdev"), undefined, null, [1,2,3,4], {title: "Frontend Developer"}

  const [on, setOn] = useState(false);
  // const [title, setTitle]
  // const [isActive, setIsActive] => convention. setIsActive is a callback to set the isActive value.
  console.log(on, setOn);
  // state change => re-render

  const handleToggle = () => {
    setOn((on) => !on);

    // above code is equivalent to below code
    // setOn((on) => {
    //   return !on;
    // });
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
