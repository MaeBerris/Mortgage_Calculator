import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app", () => {
  test("renders app component", () => {
    render(<App />);
    expect(screen.getByRole("app")).toBeInTheDocument();
  });
});
