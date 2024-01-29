const add = (numbers) => {
  /// if numbers is empty or undefined returning 0
  if (numbers === "") {
    return 0;
  }
  // adding numbers
  const allNumbers = numbers.split(",");
  const addition = allNumbers.reduce((a, b) => Number(a) + Number(b));
  return Number(addition);
};

module.exports = add;

console.log(add("1,2"));
