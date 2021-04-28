import styled from "styled-components";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import LiveCalculationSummary from "./components/MortgageCalculator/LiveCalculationSummary";
import React from "react";

function App() {
  const [mortgage, setMortgageAmount] = React.useState("300,000");
  const [interest, setInterest] = React.useState(10);
  const [amortization, setAmortization] = React.useState(25);
  const [frequency, setFrequency] = React.useState(12);
  const [term, setTerm] = React.useState(5);

  return (
    <AppWrapper role="app">
      <Header />
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
      <LiveCalculationSummary
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

const AppWrapper = styled.div``;
