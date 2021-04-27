import isPositiveNumber from "../../helpers/IsPositiveNumber";
import { isWithinInterestRange } from "../../helpers/isWithinInterestRange";
import React from "react";

const InterestRateInput = ({ interest, setInterest }) => {
  const [errorMessage, setErrorMessage] = React.useState(null);

  const onChange = (ev) => {
    const CheckIsPositiveNumber = isPositiveNumber(ev.target.value);
    const isValidInterestInput = isWithinInterestRange(ev.target.value);
    if (!isValidInterestInput && ev.target.value !== "") {
      setErrorMessage(
        "Reminder: Please enter a percent greater than 0 and less than 100"
      );
      return;
    }
    if (!CheckIsPositiveNumber && ev.target.value !== "") {
      setErrorMessage(
        "Reminder: Please enter a percent greater than 0 and less than 100"
      );
      return;
    } else {
      setErrorMessage(null);
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
      <div>{errorMessage}</div>
    </div>
  );
};

export default InterestRateInput;
