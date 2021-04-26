import { seperateNumberByCommas } from "./seperateNumberByCommas";
import "@testing-library/jest-dom";

describe("seperateNumberByComma", () => {
  test("given an empty string it should return an empty string", () => {
    expect(seperateNumberByCommas("")).toBe("");
  });
  test("given a string where the quantity of numbers is divisible by three, it should return that string without a comma at index 0", () => {
    expect(seperateNumberByCommas("155")).not.toBe(",155");
    expect(seperateNumberByCommas("155")).toBe("155");
    expect(seperateNumberByCommas("122155")).toBe("122,155");
  });
  test("given a string of a decimal number, it should seperate every thousand by commas before the decimal and not after", () => {
    expect(seperateNumberByCommas("155155.1555")).toBe("155,155.1555");
    expect(seperateNumberByCommas("15155.250250")).toBe("15,155.250250");
    expect(seperateNumberByCommas("1555.")).toBe("1,555.");
  });
  test("given a string of a number, it should place commas as thounsands seperators", () => {
    expect(seperateNumberByCommas("1555555")).toBe("1,555,555");
  });
});
