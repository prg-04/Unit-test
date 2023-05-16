const capitalize = require("./capitalize");

test("capitalize function exists", () => {
  expect(capitalize).toBeDefined();
});

test("capitalize function returns the capitalized string", () => {
  expect(capitalize("hello")).toEqual("Hello");
});

test("capitalize function returns the capitalized string", () => {
  expect(capitalize("")).toEqual("");
});

test("capitalize function returns the capitalized string", () => {
  expect(capitalize("hello world")).toEqual("Hello world");
});

