function test(name, fn) {
  console.log("-", name);

  this.__testName__ = name;
  fn.call(this);
}

function notThrow(func) {
  return !toThrow(func);
}

function toThrow(func, error) {
  try {
    func();
  } catch (e) {
    if (error instanceof String) {
      return e.toString() === `Error: ${errorMessage}`;
    }
    if (error instanceof Object) {
      return e.toString() === e.toString();
    }
    return true;
  }
  return false;
}

function assert(desc, cond) {
  if (cond) {
    console.log("✅", this.__testName__, ">", desc);
  } else {
    console.error("💩", this.__testName__, ">", desc);
    throw new Error(`Test case doesn't match!`);
  }
}

module.exports = { test, it: assert, assert, notThrow, toThrow };
