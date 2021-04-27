import React from "react";
import styled from "styled-components";

const PaymentFrequency = ({ frequency, setFrequency }) => {
  const onChange = (ev) => {
    setFrequency(ev.target.value);
  };
  return (
    <Wrapper>
      <Label htmlFor="paymentFrequency">Payment Frequency:</Label>
      <Select value={frequency} onChange={onChange} id="paymentFrequency">
        <option value={52}>{"Weekly (52x per year)"}</option>
        <option value={26}>{"Bi-Weekly (26x per year)"}</option>
        <option value={24}>{"Semi-Monthly (24x per year)"}</option>
        <option value={12}>{"Monthly (12x per year)"}</option>
      </Select>
    </Wrapper>
  );
};

export default PaymentFrequency;

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Select = styled.select`
  font-size: 15px;
  border: 1px solid black;
  height: 35px;
  width: 100%;
  border-radius: 5px;
`;
