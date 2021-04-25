import React from "react";

const PaymentFrequency = ({ frequency, setFrequency }) => {
  const onChange = (ev) => {
    setFrequency(ev.target.value);
  };
  return (
    <div>
      <label htmlFor="paymentFrequency">Payment Frenquency:</label>
      <select value={frequency} onChange={onChange} id="paymentFrequency">
        <option value={52}>{"Weekly (52x per year)"}</option>
        <option value={26}>{"Bi-Weekly (26x per year)"}</option>
        <option value={24}>{"Semi-Monthly (24x per year)"}</option>
        <option value={12}>{"Monthly (12x per year)"}</option>
      </select>
    </div>
  );
};

export default PaymentFrequency;
