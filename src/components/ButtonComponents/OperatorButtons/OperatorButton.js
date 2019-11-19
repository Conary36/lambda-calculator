import React from "react";

const OperatorButton = (props) => {

/*onClick calculation refers to props.value */
  return (
    <div className="opbutton">
    <button className="operations_button" onClick={ ()=>{props.newData(props.buttonVal)}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.buttonChar}
    </button>
    </div>
  );
};

export default OperatorButton;