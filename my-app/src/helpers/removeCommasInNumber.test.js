import { removeCommasInNumber } from "./removeCommasInNumber";

describe("removeCommasInNumber", () => {
  test("given a string of numbers seperated by commas, it should return a string with the commas removed", () => {
    const actual = removeCommasInNumber("15,155,155.15");
    expect(actual).toBe("15155155.15");
    expect(removeCommasInNumber("155,15.")).toBe("15515.");
  });
});
