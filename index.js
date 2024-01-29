const add = (numbers) => {
  /// if numbers is empty or undefined returning 0
  if (numbers === "") {
    return 0;
  }

  // adding delimiters and creating regular experssion for it.
  let delimiters = [",", "\n"];
  const regex = new RegExp(`[${delimiters.join("")}]`);

  // adding numbers
  const allNumbers = numbers.split(regex).map((int) => Number(int));
  const addition = allNumbers.reduce((a, b) => a + b);
  return addition;
};

console.log(add("1,2"));
console.log(add("4\n2"));

module.exports = add;
