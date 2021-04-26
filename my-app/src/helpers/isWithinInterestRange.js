export const isWithinInterestRange = (number) => {
  if (number < 100 && number > 0) {
    return true;
  } else {
    return false;
  }
};
