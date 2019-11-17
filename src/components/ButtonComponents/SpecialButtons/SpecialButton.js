import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special_button" onClick={ ()=>{props.newData(props.specialText)}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.buttonText}
    </button>
  );
};
export default SpecialButton;