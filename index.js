const add = (numbers) => {
  /// if numbers is empty or undefined returning 0
  if (numbers === "") {
    return 0;
  }

  // adding numbers
  const allNumbers = numbers.split(",").map((int) => Number(int));
  const addition = allNumbers.reduce((a, b) => a + b);
  return addition;
};

module.exports = add;

console.log(add("1,2"));
