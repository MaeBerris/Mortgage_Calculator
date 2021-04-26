export default function IsPositiveNumber(number) {
  const myStringOfNumber = number.toString();
  const stringNumberWithoutDecimal = myStringOfNumber.replace(".", "");
  const numbersOnly = /^\d+$/;

  if (!numbersOnly.test(stringNumberWithoutDecimal)) {
    return false;
  }

  if (number < 0) {
    return false;
  }

  return true;
}
