import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("LiveCalculationSummary", () => {
  test("renders the LiveCalculationSummary component", () => {
    render(<App />);
    expect(screen.getByText("Live Calculation Summary")).toBeInTheDocument();
  });
  test("hooks into the values of inputs in Form component and renders appropriate totalCost value", async () => {
    render(<App />);
    const mortgageInput = screen.getByRole("textbox");
    const interestInput = screen.getByRole("spinbutton");
    const amortizationInput = screen.getByRole("combobox", {
      name: "Amortization Period:",
    });
    const paymentFrequencyInput = screen.getByRole("combobox", {
      name: "Payment Frequency:",
    });
    const totalCost = screen.getByText("Total Cost").nextSibling;
    expect(totalCost.innerHTML).toBe("$ 817,830.00");

    await userEvent.type(mortgageInput, "1");

    expect(totalCost.innerHTML).toBe("$ 8,178,309.00");

    await userEvent.clear(interestInput);
    await userEvent.type(interestInput, "5");

    expect(totalCost.innerHTML).toBe("$ 5,261,313.00");

    await userEvent.selectOptions(amortizationInput, "30");

    expect(totalCost.innerHTML).toBe("$ 5,797,674.00");

    await userEvent.selectOptions(paymentFrequencyInput, "52");

    expect(totalCost.innerHTML).toBe("$ 5,793,684.00");
  });
});
