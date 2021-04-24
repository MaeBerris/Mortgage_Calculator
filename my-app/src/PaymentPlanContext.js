import React from "react";

export const PaymentPlanContext = React.createContext(null);

const PaymentPlanContextProvider = ({ children }) => {
  const [mortgageAmount, setMortgageAmount] = React.useState(100000);

  return (
    <PaymentPlanContext.Provider value={{ mortgageAmount, setMortgageAmount }}>
      {children}
    </PaymentPlanContext.Provider>
  );
};

export default PaymentPlanContextProvider;
