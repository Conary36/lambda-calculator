import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operators">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.buttonText}{" "};
    </button>
  );
};

export default OperatorButton;