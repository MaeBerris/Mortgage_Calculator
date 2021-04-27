import { isWithinInterestRange } from "./isWithinInterestRange";

describe("isWithinInterestRange", () => {
  test("given a number, it should return true if it is within 0 and 100 and false otherwise", () => {
    expect(isWithinInterestRange(50.26)).toBe(true);
    expect(isWithinInterestRange(105.5)).toBe(false);
    expect(isWithinInterestRange(-5)).toBe(false);
    expect(isWithinInterestRange(0)).toBe(false);
  });
});
