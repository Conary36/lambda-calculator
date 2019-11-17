import React from "react";


const NumberButton = (props) => {
  return (
    <button onClick={ ()=>{props.newData(props.item)}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.item}{" "}
    </button>
  );
};

export default NumberButton;
