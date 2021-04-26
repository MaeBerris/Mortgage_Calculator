import styled from "styled-components";
import Form from "./components/Form/Form";
import MortgageCalculator from "./components/MortgageCalculator/MortgageCalculator";
import React from "react";

function App() {
  const [mortgage, setMortgageAmount] = React.useState("");
  const [interest, setInterest] = React.useState(10);
  const [amortization, setAmortization] = React.useState(25);
  const [frequency, setFrequency] = React.useState(12);
  const [term, setTerm] = React.useState(5);

  return (
    <AppWrapper role="app">
      <Form
        mortgage={mortgage}
        setMortgageAmount={setMortgageAmount}
        interest={interest}
        setInterest={setInterest}
        amortization={amortization}
        setAmortization={setAmortization}
        frequency={frequency}
        setFrequency={setFrequency}
        term={term}
        setTerm={setTerm}
      />
      <MortgageCalculator
        mortgage={mortgage}
        setMortgageAmount={setMortgageAmount}
        interest={interest}
        setInterest={setInterest}
        amortization={amortization}
        setAmortization={setAmortization}
        frequency={frequency}
        setFrequency={setFrequency}
        term={term}
        setTerm={setTerm}
      />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
