import React from "react";

const NumberButton = (props) => {
  return (
    <button
      {/* Display a button element rendering the data being passed down from the parent container on props */}
        className="number_button"
        onClick={() => props.setNumberState(props.button)}
        >
      <span>{props.button.value}</span>
    </button>
  );
};
export default NumberButton;