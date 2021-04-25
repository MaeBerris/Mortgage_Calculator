export const seperateNumberByCommas = (StringNumber) => {
  if (StringNumber === "") {
    return "";
  }
  const numbersBeforeDecimal = StringNumber.split(".")[0];
  const numbersAfterDecimal = StringNumber.split(".")[1];
  const arrayOfNumbers = numbersBeforeDecimal.split("").reverse();
  const arrayOfNumbersAndCommas = [];

  arrayOfNumbers.forEach((number, index) => {
    if ((index + 1) % 3 === 0) {
      arrayOfNumbersAndCommas.push(`,${number}`);
    } else {
      arrayOfNumbersAndCommas.push(number);
    }
  });
  let StringOfNumberWithCommas = arrayOfNumbersAndCommas.reverse().join("");

  if (StringOfNumberWithCommas.indexOf(",") === 0) {
    StringOfNumberWithCommas = StringOfNumberWithCommas.slice(1);
  }

  if (
    numbersAfterDecimal ||
    StringNumber.lastIndexOf(".") === StringNumber.length - 1
  ) {
    return `${StringOfNumberWithCommas}.${numbersAfterDecimal}`;
  } else {
    return `${StringOfNumberWithCommas}`;
  }
};
