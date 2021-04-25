import React from "react";
import styled from "styled-components";
import MortgageAmountInput from "../MortgageAmountInput/MortgageAmountInput";
import InterestRateInput from "../InterestRateInput/InterestRateInput";

const Form = () => {
  const [mortgage, setMortgageAmount] = React.useState(100000);
  const [interest, setInterest] = React.useState(10);
  return (
    <FormWrapper>
      <FormHeader>Payment Plan</FormHeader>
      <MortgageAmountInput
        mortgage={mortgage}
        setMortgageAmount={setMortgageAmount}
      />
      <InterestRateInput interest={interest} setInterest={setInterest} />
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.form`
  border: 2px solid blue;
  border-radius: 5px;
  width: 30%;
`;

const FormHeader = styled.h3`
  color: white;
  background: darkblue;
  display: block;
  border-bottom: 1px solid blue;
  margin: 0px;
`;
