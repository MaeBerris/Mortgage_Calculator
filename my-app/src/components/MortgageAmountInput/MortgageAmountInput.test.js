import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MortgageAmountInput from "./MortgageAmountInput";
import Form from "../Form/Form";

describe("MortgageAmountInput", () => {
  test("renders MortgageAmountInput", () => {
    render(<MortgageAmountInput />);
    expect(screen.getByText("Mortgage Amount")).toBeInTheDocument();
  });
  test("changes value of MortgageInput on user input", async () => {
    render(<Form />);
    const mortgageInput = screen.getByRole("mortgageAmount");

    fireEvent.change(mortgageInput, { target: { value: "1555" } });

    expect(screen.getByRole("mortgageAmount").value).toBe("1,555");
  });
});
