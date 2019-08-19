module.exports = function assert(desc, cond) {
  if (cond) {
    console.log("✅", this.__testName__, ">", desc);
  } else {
    console.error("💩", this.__testName__, ">", desc);
    throw new Error(`Test case doesn't match!`);
  }
};
