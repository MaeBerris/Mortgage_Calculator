export default function IsPositiveNumber(number) {
  const numbersOnly = /^\d+$/;
  if (!numbersOnly.test(number)) {
    return false;
  }

  if (number < 0) {
    return false;
  }
  return true;
}
