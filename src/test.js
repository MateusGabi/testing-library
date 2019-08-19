module.exports = function test(name, fn) {
  console.log("-", name);

  this.__testName__ = name;
  fn.call(this);
};
