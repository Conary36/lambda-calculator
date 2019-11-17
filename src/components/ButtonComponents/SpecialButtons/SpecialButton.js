import React from "react";

const SpecialButton = (props) => {
  return (
    <button onClick={ ()=>{props.newData(props.specialText)}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.specialText}{" "};
    </button>
  );
};
export default SpecialButton;