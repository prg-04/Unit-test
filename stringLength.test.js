const stringLength = require("./stringLength");

test("stringLength function exists", () => {
  expect(stringLength).toBeDefined();
});

test("stringLength function returns the length of a string", () => {
  expect(stringLength("hello")).toEqual(5);
});

test("stringLength function returns the length of a string", () => {
    expect(stringLength("")).toEqual(0);
});

test('String length is greater than 1', () => {
    expect(stringLength('hello')).toBeGreaterThan(1);
});

test('String length is less than 10', () => {
    expect(stringLength('hello')).toBeLessThan(10);
});


