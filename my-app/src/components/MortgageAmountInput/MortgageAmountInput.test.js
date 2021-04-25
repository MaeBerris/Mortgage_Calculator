import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MortgageAmountInput from "./MortgageAmountInput";

describe("MortgageAmountInput", () => {
  test("renders MortgageAmountInput", () => {
    render(<MortgageAmountInput />);
    expect(screen.getByText("Mortgage Amount")).toBeInTheDocument();
  });
});
