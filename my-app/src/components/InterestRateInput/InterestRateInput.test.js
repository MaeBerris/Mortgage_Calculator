import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import InterestRateInput from "./InterestRateInput";
import App from "../../App";

describe("InterestRateInput", () => {
  test("renders InterestRateInput component", () => {
    render(<InterestRateInput />);
    expect(screen.getByText("Interest Rate:")).toBeInTheDocument();
  });
  test("The InterestRate input only accepts numbers between 0 and 100 as inputs", async () => {
    render(<App />);
    const interestInput = screen.getByRole("spinbutton");
    await userEvent.clear(interestInput);
    await userEvent.type(interestInput, "100");

    expect(interestInput.value).toBe("10");

    await userEvent.clear(interestInput);
    await userEvent.type(interestInput, "abc");

    expect(interestInput.value).toBe("");
  });
  test("given a user input that isn't within our accepted values of 0 and 100, it should display a warning message", async () => {
    render(<App />);
    const interestInput = screen.getByRole("spinbutton");
    const errorMessage =
      "Reminder: Please enter a percent greater than 0 and less than 100";
    const ErrorMessageBefore = screen.queryByText(errorMessage);
    expect(ErrorMessageBefore).not.toBeInTheDocument();

    await userEvent.clear(interestInput);
    await userEvent.type(interestInput, "100");

    const ErrorMessageAfter = screen.queryByText(errorMessage);
    expect(ErrorMessageAfter).toBeInTheDocument();
  });
});
