import {
  calculateMortgagePayment,
  calculateNumberOfPayments,
  calculateTotalCosts,
  calculateInterestPayments,
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
  test("given an amortization number and a frequency number it should return the product of those values", () => {
    expect(calculateNumberOfPayments(30, 12)).toBe(360);
    expect(calculateNumberOfPayments(25, 52)).toBe(1300);
  });
});

describe("calculateTotalCosts", () => {
  test("given a mortgage payment and the total number of payments it should return the product of those two values with only two digits after the decimal point", () => {
    expect(calculateTotalCosts(877.57503, 360)).toBe("315927.01");
  });
});

describe("calculateInterestPayments", () => {
  test("given a total mortgage string and a total cost number, it should return the difference between the total cost and mortgage", () => {
    expect(calculateInterestPayments("300", 1000)).toBe("700.00");
  });
  test("given a total cost number and a total mortgage string where their difference results in a negetive number, it should return 0.00", () => {
    expect(calculateInterestPayments("400", 20)).toBe("0.00");
  });
});
