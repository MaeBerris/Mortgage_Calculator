import styled from "styled-components";
import React from "react";
import { PaymentPlanContext } from "../../PaymentPlanContext";

const MortgageAmountInput = () => {
  const { mortgageAmount } = React.useContext(PaymentPlanContext);
  console.log(mortgageAmount);
  return <div>{mortgageAmount}</div>;
};

export default MortgageAmountInput;
