const test = require("./src/test");
const assert = require("./src/assert");

const notThrow = require("./src/assertions/notThrow");
const toThrow = require("./src/assertions/toThrow");

module.exports = { test, it: assert, assert, notThrow, toThrow };
