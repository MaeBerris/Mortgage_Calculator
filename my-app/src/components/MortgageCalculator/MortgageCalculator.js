import React from "react";
import { removeCommasInNumber } from "../../helpers/removeCommasInNumber";

const MortgageCalculator = ({
  mortgage,
  interest,
  amortization,
  frequency,
  term,
}) => {
  const [mortgagePerMonth, setMortgagePerMonth] = React.useState(0);

  React.useEffect(() => {
    const interestPerMonth = interest / 100 / frequency;

    const numberOfMonths = amortization * frequency;

    const line1 =
      interestPerMonth * Math.pow(1 + interestPerMonth, numberOfMonths);

    const line2 = Math.pow(1 + interestPerMonth, numberOfMonths) - 1;

    const mortgageResult = removeCommasInNumber(mortgage) * (line1 / line2);

    setMortgagePerMonth(mortgageResult.toFixed(2));
  }, [mortgage, interest, amortization, frequency, term]);

  return <div>{`${mortgagePerMonth}`}</div>;
};

export default MortgageCalculator;
