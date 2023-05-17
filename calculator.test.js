const Calculator = require("./calculator");

describe("Calculator class", () => {
  test("Calculator class should be defined", () => {
    expect(Calculator).toBeDefined();
  });

  test("Calculator class should have a constructor", () => {
    const calculator = new Calculator();
    expect(calculator).toBeDefined();
  });

  test("Calculator class should have a add method", () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toEqual(3);
  });

  test("Calculator class should have a subtract method", () => {
    const calculator = new Calculator();
    expect(calculator.subtract(1, 2)).toEqual(-1);
  });

  test("Calculator class should have a multiply method", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(1, 2)).toEqual(2);
  });

  test("Calculator class should have a divide method", () => {
    const calculator = new Calculator();
    expect(calculator.divide(1, 2)).toEqual(0.5);
  });
});
