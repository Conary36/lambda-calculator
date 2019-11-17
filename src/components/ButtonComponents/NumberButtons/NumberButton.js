import React from "react";


const NumberButton = (props) => {
  return (
    <button className="numbers_button" onClick={ ()=>{props.newData(props.buttonText)}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.buttonText}{" "}
    </button>
  );
};

export default NumberButton;
