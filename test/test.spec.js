const { test, assert } = require("../index");

test("test function", () => {
  assert("it should not be null", test !== null);
  assert("it should not be undefined", test !== undefined);
  assert("it should be a function", test instanceof Function);
});
