import React from "react";

const OperatorButton = (props) => {
const char = props.operator.value;

  return (
    <button onClick={ ()=>{props.newData(char)}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}{" "};
    </button>
  );
};

export default OperatorButton;