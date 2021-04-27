import React from "react";
import { removeCommasInNumber } from "../../helpers/removeCommasInNumber";
import { calculateMortgagePayment } from "../../helpers/MortgageCalculatorHelpers";

const MortgageCalculator = ({
  mortgage,
  interest,
  amortization,
  frequency,
  term,
}) => {
  const [mortgagePayment, setMortgagePayment] = React.useState(0);

  React.useEffect(() => {
    const mortgagePaymentResult = calculateMortgagePayment(
      mortgage,
      interest,
      amortization,
      frequency
    );

    setMortgagePayment(mortgagePaymentResult);
  }, [mortgage, interest, amortization, frequency, term]);

  return <div>{`${mortgagePayment}`}</div>;
};

export default MortgageCalculator;
