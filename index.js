const splitNumbers = (numbers, regex, negativeNumbers) => {
  return numbers.split(regex).map((int) => {
    const parsedNumber = Number(int);
    if (parsedNumber < 0) {
      negativeNumbers.push(parsedNumber);
    }
    return parsedNumber;
  });
};

const throwNegativeError = (negativeNumbers) => {
  throw new Error(
    "Negative numbers are not allowed: " + negativeNumbers.join(", ")
  );
};

const sumNumbers = (numbers) => {
  return numbers.reduce((a, b) => a + b);
};

const add = (numbers) => {
  if (numbers === "") return 0;

  let delimiters = [",", "\n"];
  let negativeNumbers = [];

  if (numbers.startsWith("//")) {
    const customDelimiter = numbers.substring(2, numbers.indexOf("\n"));
    delimiters = [customDelimiter];
    numbers = numbers.substring(numbers.indexOf("\n") + 1);
  }

  const regex = new RegExp(`[${delimiters.join("")}]`);
  const allNumbers = splitNumbers(numbers, regex, negativeNumbers);

  if (negativeNumbers.length > 0) {
    throwNegativeError(negativeNumbers);
  }

  return sumNumbers(allNumbers);
};

module.exports = add;
