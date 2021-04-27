import constants from "../../constants";
import React from "react";
import styled from "styled-components";

const AmortizationInput = ({ amortization, setAmortization }) => {
  const onChange = (ev) => {
    setAmortization(ev.target.value);
  };
  return (
    <Wrapper>
      <Label htmlFor="interestRate">Amortization Period:</Label>
      <Select value={amortization} onChange={onChange}>
        {constants.AmortizationYears.map((year) => {
          return (
            <option value={year} key={year}>
              {year > 1 ? `${year} years` : `${year} year`}
            </option>
          );
        })}
      </Select>
    </Wrapper>
  );
};

export default AmortizationInput;

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
