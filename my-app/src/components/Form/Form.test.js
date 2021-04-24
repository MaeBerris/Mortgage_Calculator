import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  test("renders Form component", () => {
    render(<Form />);
    expect(screen.getByText("Payment Plan")).toBeInTheDocument();
  });
});
