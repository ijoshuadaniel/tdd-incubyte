const add = (numbers) => {
  /// if numbers is empty or undefined returning 0
  if (numbers === "") {
    return 0;
  }

  // adding delimiters.
  let delimiters = [",", "\n"];
  // negative numbers array
  let negativeNumbers = [];

  // supporting custom delimeter
  if (numbers.startsWith("//")) {
    const customDelimiter = numbers.substring(2, numbers.indexOf("\n"));
    delimiters = [customDelimiter];
    numbers = numbers.substring(numbers.indexOf("\n") + 1);
  }

  // creating regex for delimeters
  const regex = new RegExp(`[${delimiters.join("")}]`);
  // adding numbers
  const allNumbers = numbers.split(regex).map((int) => {
    const parsedNumber = Number(int);
    if (parsedNumber < 0) {
      negativeNumbers.push(parsedNumber);
    }
    return parsedNumber;
  });
  if (negativeNumbers.length > 0) {
    throw new Error(
      "Negative numbers are not allowed." + negativeNumbers.join(" ,")
    );
  }
  return allNumbers.reduce((a, b) => a + b);
};

console.log(add(""));
console.log(add("1,2"));
console.log(add("4\n2"));
console.log(add("//;\n1;2;3;4"));

try {
  console.log(add("1,2,3,4,5,-6"));
} catch (error) {
  console.error(error.message);
}

module.exports = add;
