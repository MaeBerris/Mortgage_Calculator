import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MortgageAmountInput from "./MortgageAmountInput";
import App from "../../App";

describe("MortgageAmountInput", () => {
  test("renders MortgageAmountInput", () => {
    render(<MortgageAmountInput />);
    expect(screen.getByText("Mortgage Amount:")).toBeInTheDocument();
  });
  test("changes value of MortgageInput on user input", async () => {
    render(<App />);
    const mortgageInput = screen.getByRole("textbox");

    fireEvent.change(mortgageInput, { target: { value: "1555" } });

    expect(mortgageInput.value).toBe("1,555");
  });
  test("does not allow user to input values other than numbers", async () => {
    render(<App />);
    const mortgageInput = screen.getByRole("textbox");
    await userEvent.clear(mortgageInput, "3,000,00");
    await userEvent.type(mortgageInput, "1355abc");

    expect(mortgageInput.value).toBe("1,355");
  });
});
