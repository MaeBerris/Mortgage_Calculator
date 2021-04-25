import styled from "styled-components";
import isPositiveNumber from "../../helpers/IsPositiveNumber";
import React from "react";

const MortgageAmountInput = ({ mortgage, setMortgageAmount }) => {
  const onChange = (ev) => {
    const CheckIsPositiveNumber = isPositiveNumber(ev.target.value);

    if (!CheckIsPositiveNumber) {
      return;
    } else {
      setMortgageAmount(ev.target.value);
    }
  };

  return (
    <div>
      <label htmlFor="mortgageAmount">Mortgage Amount</label>
      <input
        type="number"
        id="mortgageAmount"
        value={mortgage}
        onChange={onChange}
      />
    </div>
  );
};

export default MortgageAmountInput;
