const spacer = require("./utils/spacer");
const fog = require("./utils/fog");

module.exports = function test(name, fn) {
  console.log(spacer(1), "-", name);
  fog(fn)(name);
};
