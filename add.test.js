const add = require("./index.js");
const { generateRandomNumbers, addAllNumbers } = require("./testData.js");

describe("Testing String Calculator", () => {
  test("Should return zero for an empty argument", () => {
    expect(add("")).toBe(0);
  });

  test("Should return the same number for a single argument", () => {
    expect(add("1")).toBe(1);
  });

  test("Should add two arguments separated by commas", () => {
    expect(add("1,2")).toBe(3);
  });

  test("Should handle any amount of numbers/arguments", () => {
    const randomNumber = Math.floor(Math.random() * 100);
    const generatedNumbers = generateRandomNumbers(randomNumber);
    const splitNumbers = generatedNumbers.split(",");
    const sum = addAllNumbers(generatedNumbers);

    // Checking if numbers are more than one
    expect(splitNumbers.length).toBeGreaterThan(1);

    // Expecting the same result for any amount of numbers
    expect(add(generatedNumbers)).toEqual(sum);
  });

  test("Should return the sum when adding a new line", () => {
    expect(add("1,2,3\n4")).toBe(10);
  });

  test("Should support custom delimiter and return the sum", () => {
    // Delimiter ;
    expect(add("//;\n1;2;3;4;0")).toBe(10);

    // Delimiter |
    expect(add("//|\n1|2|3|4|0")).toBe(10);
  });

  test("Should throw an error for negative numbers", () => {
    expect(() =>
      add("1,2,3,4,5,-6").toThrowError("Negative numbers are not allowed. -6")
    );
  });
});
