const add = (numbers) => {
  /// if numbers is empty or undefined returning 0
  if (numbers === "") {
    return 0;
  }

  // adding delimiters.
  let delimiters = [",", "\n"];

  // supporting custom delimeter
  if (numbers.startsWith("//")) {
    const customDelimiter = numbers.substring(2, numbers.indexOf("\n"));
    delimiters = [customDelimiter];
    numbers = numbers.substring(numbers.indexOf("\n") + 1);
  }

  // creating regex for delimeters
  const regex = new RegExp(`[${delimiters.join("")}]`);
  // adding numbers
  const allNumbers = numbers.split(regex).map((int) => Number(int));
  const addition = allNumbers.reduce((a, b) => a + b);
  return addition;
};

console.log(add("1,2"));
console.log(add("4\n2"));
console.log(add("//;\n1;2;3;4"));

module.exports = add;
