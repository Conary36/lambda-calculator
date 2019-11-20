import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);

  

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorState.map((operator, index) => {
        return(
          <OperatorButton
            key = {index}
            buttonChar = {operator.char}
            buttonVal = {operator.value}
            newData={props.newData}
          />
        )
      })}

    </div>
  );
};

export default Operators;