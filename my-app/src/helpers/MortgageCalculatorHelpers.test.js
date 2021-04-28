import {
  calculateMortgagePayment,
  calculateNumberOfPayments,
  calculateTotalCosts,
} from "./MortgageCalculatorHelpers";

describe("calculateMortgagePayment", () => {
  test("given a total mortage string, an interest value number, an amortization period number and a frequency number, it should return a monthly mortgage payment string", () => {
    expect(calculateMortgagePayment("300,000", 5, 30, 12)).toBe("1610.46");
    expect(calculateMortgagePayment("100,000", 10, 25, 52)).toBe("209.55");
  });
  test("given an empty mortgage string it should return 0", () => {
    expect(calculateMortgagePayment("", 5, 30, 12)).toBe("0.00");
  });
  test("given an empty interest string, it should return 0", () => {
    expect(calculateMortgagePayment("200,000", "", 30, 12)).toBe("0.00");
  });
});

describe("calculateNumberOfPayments", () => {
  test("given an amortization number, a frequency number and a term number it should return an object with the correct values", () => {
    expect(calculateNumberOfPayments(30, 12, 5)).toBe(360);
  });
  expect(calculateNumberOfPayments(25, 52, 10)).toBe(1300);
});

describe("calculateTotalCosts", () => {
  test("given a mortgage payment, the number of payments per term and the total number of payments it should return an object with the appropriate values", () => {
    expect(calculateTotalCosts(877.57, 360)).toBe("315925.20");
  });
});
