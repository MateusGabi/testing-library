const { toThrow, test, assert } = require("../index");

test("assert function", () => {
  assert("it should not be null", assert !== null);
  assert("it should not be undefined", assert !== undefined);
  assert("it should be a function", assert instanceof Function);

  assert("it should be true", true);

  assert(
    "it should throw any error",
    toThrow(() => {
      throw new Error();
    })
  );

  const err = new Error("Fooo bar");
  assert(
    "it should throw specific",
    toThrow(() => {
      throw err;
    }, err)
  );
});
