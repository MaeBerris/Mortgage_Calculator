import React from "react";
import styled from "styled-components";
import MortgageAmountInput from "../MortgageAmountInput/MortgageAmountInput";
import InterestRateInput from "../InterestRateInput/InterestRateInput";
import AmortizationInput from "../AmortizationInput/AmortizationInput";
import PaymentFrequency from "../PaymentFrequency/PaymentFrequency";

const Form = ({
  mortgage,
  setMortgageAmount,
  interest,
  setInterest,
  amortization,
  setAmortization,
  frequency,
  setFrequency,
  term,
  setTerm,
}) => {
  return (
    <SectionWrapper>
      <FormWrapper>
        <FormHeader>Payment Plan</FormHeader>
        <MortgageAmountInput
          mortgage={mortgage}
          setMortgageAmount={setMortgageAmount}
        />
        <InterestRateInput interest={interest} setInterest={setInterest} />
        <AmortizationInput
          amortization={amortization}
          setAmortization={setAmortization}
        />
        <PaymentFrequency frequency={frequency} setFrequency={setFrequency} />
      </FormWrapper>
    </SectionWrapper>
  );
};

export default Form;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0px;
`;

const FormWrapper = styled.form`
  border: 1px solid rgb(159, 220, 252);
  width: 30%;
  background: white;
  font-size: 15px;
`;

const FormHeader = styled.h3`
  color: white;
  background: darkblue;
  display: block;
  border-bottom: 1px solid blue;
  font-weight: 600;
  padding: 10px;
  font-size: 20px;
`;
