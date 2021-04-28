import { removeCommasInNumber } from "./removeCommasInNumber";

export const calculateMortgagePayment = (
  mortgage,
  interest,
  amortization,
  frequency
) => {
  if (interest === "") {
    return "0.00";
  }
  const interestOverTime = interest / 100 / frequency;

  const numberOfPayments = amortization * frequency;

  const line1 =
    interestOverTime * Math.pow(1 + interestOverTime, numberOfPayments);

  const line2 = Math.pow(1 + interestOverTime, numberOfPayments) - 1;

  const mortgageResult = removeCommasInNumber(mortgage) * (line1 / line2);

  return mortgageResult.toFixed(2);
};

export const calculateNumberOfPayments = (amortization, frequency) => {
  const totalNumberOfPayments = amortization * frequency;

  return totalNumberOfPayments;
};

export const calculateTotalCosts = (mortgagePayment, totalNumberOfPayments) => {
  let totalCost = mortgagePayment * totalNumberOfPayments;

  totalCost = totalCost.toFixed(2);
  return totalCost;
};

export const calculateInterestPayments = (mortgage, totalCost) => {
  const parsedMortgage = removeCommasInNumber(mortgage);
  const interestPayment = (totalCost - parsedMortgage).toFixed(2);
  if (interestPayment < 0) {
    return "0.00";
  } else {
    return interestPayment;
  }
};
