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
  console.log(interest);
  const interestOverTime = interest / 100 / frequency;

  const numberOfPayments = amortization * frequency;

  const line1 =
    interestOverTime * Math.pow(1 + interestOverTime, numberOfPayments);

  const line2 = Math.pow(1 + interestOverTime, numberOfPayments) - 1;

  const mortgageResult = removeCommasInNumber(mortgage) * (line1 / line2);

  return mortgageResult.toFixed(2);
};

export const calculateNumberOfPayments = (amortization, frequency, term) => {
  const totalNumberOfPayments = amortization * frequency;
  const numberOfPaymentsPerTerm = frequency * term;
  const numberOfPayments = { totalNumberOfPayments, numberOfPaymentsPerTerm };

  return numberOfPayments;
};

export const calculateTotalCosts = (
  mortgagePayment,
  numberOfPaymentsPerTerm,
  totalNumberOfPayments
) => {
  let totalCostPerTerm = mortgagePayment * numberOfPaymentsPerTerm;
  let totalCost = mortgagePayment * totalNumberOfPayments;

  totalCostPerTerm = totalCostPerTerm.toFixed(2);
  totalCost = totalCost.toFixed(2);
  return { totalCost, totalCostPerTerm };
};
