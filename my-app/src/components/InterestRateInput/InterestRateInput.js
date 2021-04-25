import isPositiveNumber from "../../helpers/IsPositiveNumber";
import React from "react";

const InterestRateInput = ({ interest, setInterest }) => {
  const onChange = (ev) => {
    const CheckIsPositiveNumber = isPositiveNumber(ev.target.value);
    if (!CheckIsPositiveNumber && ev.target.value !== "") {
      return;
    } else {
      setInterest(ev.target.value);
    }
  };

  return (
    <div>
      <label htmlFor="interestRate">Interest Rate</label>
      <input
        type="number"
        id="interestRate"
        value={interest}
        onChange={onChange}
      />
    </div>
  );
};

export default InterestRateInput;
