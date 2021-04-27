import styled from "styled-components";
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
    <Wrapper>
      <Label htmlFor="interestRate">Interest Rate:</Label>
      <CurrencyAndInputWrapper>
        <Input
          type="number"
          id="interestRate"
          value={interest}
          onChange={onChange}
        />
        <Currency>%</Currency>
      </CurrencyAndInputWrapper>
      <div>{errorMessage}</div>
    </Wrapper>
  );
};

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
const CurrencyAndInputWrapper = styled.div`
  display: flex;
`;
const Currency = styled.div`
  font-size: 15px;
  height: 35px;
  display: inline;
  background: lightgrey;
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid black;
`;

const Input = styled.input`
  font-size: 15px;
  border: 1px solid black;
  height: 35px;
  width: 45%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export default InterestRateInput;
