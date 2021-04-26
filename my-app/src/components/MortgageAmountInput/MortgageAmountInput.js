import styled from "styled-components";
import { removeCommasInNumber } from "../../helpers/removeCommasInNumber";
import { seperateNumberByCommas } from "../../helpers/seperateNumberByCommas";
import isPositiveNumber from "../../helpers/IsPositiveNumber";
import React from "react";

const MortgageAmountInput = ({ mortgage, setMortgageAmount }) => {
  // const onChange = (ev) => {
  //   const CheckIsPositiveNumber = isPositiveNumber(ev.target.value);
  //   if (!CheckIsPositiveNumber && ev.target.value !== "") {
  //     return;
  //   } else {
  //     setMortgageAmount(ev.target.value);
  //   }
  // };

  const onChange = (ev) => {
    const removedCommasNumber = removeCommasInNumber(ev.target.value);
    const CheckIsPositiveNumber = isPositiveNumber(removedCommasNumber);
    const seperatedByCommas = seperateNumberByCommas(removedCommasNumber);

    if (!CheckIsPositiveNumber && ev.target.value !== "") {
      return;
    } else {
      setMortgageAmount(seperatedByCommas);
    }
    // setMortgageAmount(seperatedByCommas);
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
