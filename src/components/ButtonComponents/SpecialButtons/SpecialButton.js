import React from "react";

const SpecialButton = (props) => {
  return (
    <span className="spbutton">
    <button className="special_button" onClick={() => { props.newData(props.buttonText) }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.buttonText}{" "}
    </button>
    </span>
  );
};
export default SpecialButton;