export default function IsPositiveNumber(number) {
  const numbersOnly = /^\d+$/;
  const parsedString = parseFloat(number);

  if (!numbersOnly.test(number)) {
    if (parsedString && !Number.isInteger(parsedString) && parsedString >= 0) {
      return true;
    }
    return false;
  }

  if (number < 0) {
    return false;
  }

  return true;
}
