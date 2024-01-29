const add = require("./index.js");
const { generateRandomNumbers, addAllNumbers } = require("./testData.js");

describe("Testing String Calculator", () => {
  test("If argument is empty return zero", () => {
    expect(add("")).toBe(0);
  });
  test("If single argument is passed it should return the same number", () => {
    expect(add("1")).toBe(1);
  });
  test("If 2 argument is passed seperated with commas, it should add", () => {
    expect(add("1,2")).toBe(3);
  });
  test("check if function can handle any amount of numbers/arguments", () => {
    const n = Math.floor(Math.random() * 100);
    const generatedNumbers = generateRandomNumbers(n);
    const splitingNumbers = generateRandomNumbers(n).split(",");
    const sum = addAllNumbers(generatedNumbers);
    // checking if numbers are more then one
    expect(splitingNumbers.length).toBeGreaterThan(1);
    // expecting same result for any amount of numbers
    expect(add(generatedNumbers)).toEqual(sum);
  });
});
