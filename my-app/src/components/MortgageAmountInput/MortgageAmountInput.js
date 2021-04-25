import styled from "styled-components";
import { removeCommasInNumber } from "../../helpers/removeCommasInNumber";
import { seperateNumberByCommas } from "../../helpers/seperateNumberByCommas";
import isPositiveNumber from "../../helpers/IsPositiveNumber";
import React from "react";

const MortgageAmountInput = () => {
  // const onChange = (ev) => {
  //   const CheckIsPositiveNumber = isPositiveNumber(ev.target.value);
  //   if (!CheckIsPositiveNumber && ev.target.value !== "") {
  //     return;
  //   } else {
  //     setMortgageAmount(ev.target.value);
  //   }
  // };

  const [mortgage, setMortgageAmount] = React.useState("");

  const onChange = (ev) => {
    const removedCommasNumber = removeCommasInNumber(ev.target.value);
    console.log("first", removedCommasNumber);
    const seperatedByCommas = seperateNumberByCommas(removedCommasNumber);
    console.log("second", seperatedByCommas);
    setMortgageAmount(seperatedByCommas);
  };

  return (
    <div>
      <label htmlFor="mortgageAmount">Mortgage Amount</label>
      <input
        type="text"
        id="mortgageAmount"
        role="mortgageAmount"
        value={mortgage}
        onChange={onChange}
      />
    </div>
  );
};

export default MortgageAmountInput;
