import React, { useState } from "react";

export default function SiblingButton(props) {
  console.log("render: SiblingButton");

  // remember: how many times
  //  was this button clicked on ?

  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        console.log("did I get called?");
        setCount(count + 1);
      }}
    >
      Hello {props.name} clicked: {count}
    </button>
  );
}
