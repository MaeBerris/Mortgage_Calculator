import styled from "styled-components";
import { removeCommasInNumber } from "../../helpers/removeCommasInNumber";
import { seperateNumberByCommas } from "../../helpers/seperateNumberByCommas";
import isPositiveNumber from "../../helpers/IsPositiveNumber";
import React from "react";

const MortgageAmountInput = ({ mortgage, setMortgageAmount }) => {
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
    <Wrapper>
      <Label htmlFor="mortgageAmount">Mortgage Amount:</Label>
      <CurrencyAndInputWrapper>
        <Currency>$</Currency>
        <Input
          type="text"
          id="mortgageAmount"
          role="mortgageAmount"
          value={mortgage}
          onChange={onChange}
        />
      </CurrencyAndInputWrapper>
    </Wrapper>
  );
};

export default MortgageAmountInput;

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
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid black;
`;
const Input = styled.input`
  font-size: 15px;
  border: 1px solid black;
  height: 35px;
  width: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
