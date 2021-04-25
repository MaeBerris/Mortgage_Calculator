import constants from "../../constants";
import React from "react";

const AmortizationInput = ({ amortization, setAmortization }) => {
  const onChange = (ev) => {
    setAmortization(ev.target.value);
  };
  return (
    <div>
      <label htmlFor="interestRate">Amortization Period</label>
      <select value={amortization} onChange={onChange}>
        {constants.years.map((year) => {
          return (
            <option value={year} key={year}>
              {year > 1 ? `${year} years` : `${year} year`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default AmortizationInput;
