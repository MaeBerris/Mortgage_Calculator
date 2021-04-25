import isPositiveNumber from "./IsPositiveNumber";

describe("IsPositiveNumber", () => {
  test("given a number above or equal to 0 it should return true", () => {
    const expected = true;
    const actual = isPositiveNumber(5);

    expect(actual).toBe(expected);
  });
  test("given a string containing only a number, it should return true", () => {
    const expected = true;
    const actual = isPositiveNumber("5");

    expect(actual).toBe(expected);
  });
  test("given a string containing other characters than numbers, it should return false", () => {
    const expected = false;
    const actual1 = isPositiveNumber("1555ab");
    const actual2 = isPositiveNumber("dogs");

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });
  test("given a negative number, it should return false", () => {
    const expected = false;
    const actual = isPositiveNumber("-5");

    expect(actual).toBe(expected);
  });
});
