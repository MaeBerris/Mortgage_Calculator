import React from "react";
import styled from "styled-components";
import { seperateNumberByCommas } from "../../helpers/seperateNumberByCommas";
import isPositiveNumber from "../../helpers/IsPositiveNumber";
import {
  calculateMortgagePayment,
  calculateNumberOfPayments,
  calculateTotalCosts,
  calculateInterestPayments,
} from "../../helpers/MortgageCalculatorHelpers";

const MortgageCalculator = ({
  mortgage,
  interest,
  amortization,
  frequency,
  term,
}) => {
  const [calculationSummaryData, setCalculationSummaryData] = React.useState({
    numberOfPayments: null,
    mortgagePayment: null,
    principalPayment: null,
    interestPayments: null,
    totalCost: null,
  });

  React.useEffect(() => {
    console.log(calculationSummaryData);
    const mortgagePaymentResult = calculateMortgagePayment(
      mortgage,
      interest,
      amortization,
      frequency
    );
    const numberOfPayments = calculateNumberOfPayments(amortization, frequency);
    const totalCost = calculateTotalCosts(
      mortgagePaymentResult,
      numberOfPayments
    );
    const interestPayments = calculateInterestPayments(mortgage, totalCost);
    const data = {
      numberOfPayments: numberOfPayments,
      mortgagePayment: seperateNumberByCommas(mortgagePaymentResult),
      principalPayment: mortgage,
      interestPayments: seperateNumberByCommas(`${interestPayments}`),
      totalCost: seperateNumberByCommas(totalCost),
    };
    setCalculationSummaryData(data);
  }, [mortgage, interest, amortization, frequency, term]);

  return (
    <Wrapper>
      <SectionTitle>Live Calculation Summary</SectionTitle>
      <Table>
        <thead>
          <Tr>
            <Th>Category</Th>
            <Th>Amortization Period</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>Number Of Payments</Td>
            <Td>{calculationSummaryData.numberOfPayments}</Td>
          </Tr>
          <Tr>
            <Td>Mortgage Payment</Td>
            <Td>{`$ ${calculationSummaryData.mortgagePayment}`}</Td>
          </Tr>
          <Tr>
            <Td>Principal Payments</Td>
            <Td>{`$ ${calculationSummaryData.principalPayment}`}</Td>
          </Tr>
          <Tr>
            <Td>Interest Payment</Td>
            <Td>{`$ ${calculationSummaryData.interestPayments}`}</Td>
          </Tr>
          <Tr>
            <Td>Total Cost</Td>
            <Td>{`$ ${calculationSummaryData.totalCost}`}</Td>
          </Tr>
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default MortgageCalculator;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const Table = styled.table`
  border: 1px solid rgb(159, 220, 252);
  width: 30%;
  background: white;
  font-size: 15px;
  border-collapse: separate;
  border-spacing: 5px 10px;
`;

const Tr = styled.tr`
  border: 1px solid red;
  margin: 10px;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  background: darkblue;
  color: white;
  padding: 10px 5px;
`;

const Td = styled.td`
  text-align: left;
`;
