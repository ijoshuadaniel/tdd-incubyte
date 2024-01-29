const generateRandomNumbers = (n) => {
  let stringOfNumbers = "";
  for (let i = 0; i <= n; i++) {
    const number = Math.floor(Math.random() * 10);
    if (i === n) {
      stringOfNumbers += number;
    } else {
      stringOfNumbers += number + ",";
    }
  }
  return stringOfNumbers;
};

const addAllNumbers = (number) => {
  const arrayOfNumbers = number.split(",").map((int) => Number(int));
  return arrayOfNumbers.reduce((a, b) => a + b);
};

module.exports = {
  generateRandomNumbers,
  addAllNumbers,
};
