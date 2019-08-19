const spacer = require("./utils/spacer");
const fog = require("./utils/fog");

module.exports = function test(name, fn) {
  console.log(spacer(1), "-", name);

  this.__test_cases__ = 0;
  this.__test_success__ = 0;
  this.__test_errors__ = 0;

  fn.call(this);

  var emoji = "🎉";
  if (this.__test_success__ === 0) {
    emoji = "😔";
  } else if (this.__test_success__ !== this.__test_cases__) {
    emoji = "🤷‍";
  }

  const resume = `[${this.__test_success__}/${
    this.__test_cases__
  }] asserts ${emoji}`;

  console.log(spacer(1), resume, "\n");
};
