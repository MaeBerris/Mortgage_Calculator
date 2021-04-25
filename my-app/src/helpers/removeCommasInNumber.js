export const removeCommasInNumber = (string) => {
  const arrayOfNumbers = string.split("");
  const filteredNoCommasArray = arrayOfNumbers.filter((number) => {
    if (number === ",") {
      return false;
    } else {
      return true;
    }
  });
  const noCommasString = filteredNoCommasArray.join("");

  return noCommasString;
};

removeCommasInNumber("1551350.");
