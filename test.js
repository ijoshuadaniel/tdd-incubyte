const add = require("./index.js");

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
});
