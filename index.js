const add = (numbers) => {
  // If numbers is empty or undefined, return 0
  if (numbers === "") {
    return 0;
  }

  // Adding delimiters
  let delimiters = [",", "\n"];
  // Negative numbers array
  let negativeNumbers = [];

  // Supporting custom delimiter
  if (numbers.startsWith("//")) {
    const customDelimiter = numbers.substring(2, numbers.indexOf("\n"));
    delimiters = [customDelimiter];
    numbers = numbers.substring(numbers.indexOf("\n") + 1);
  }

  // Creating regex for delimiters
  const regex = new RegExp(`[${delimiters.join("")}]`);
  // Adding numbers
  const allNumbers = numbers.split(regex).map((int) => {
    const parsedNumber = Number(int);
    if (parsedNumber < 0) {
      negativeNumbers.push(parsedNumber);
    }
    return parsedNumber;
  });

  // If negative numbers are present, throw an error
  if (negativeNumbers.length > 0) {
    throw new Error(
      "Negative numbers are not allowed: " + negativeNumbers.join(", ")
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
