const { toThrow, test, assert, it } = require("../index");

test("assert function", () => {
  it(assert).should.not.be.null();
  it(assert).should.not.be.undefined();

  it(assert).should.be.instanceOf.function();

  it(assert).should.not.be.instanceOf.boolean();
  it(assert).should.not.be.instanceOf.number();
  it(assert).should.not.be.instanceOf.string();
});

test(`'it' use`, () => {
  it(true).should.be.true();
  it(false).should.be.false();

  it(true).should.not.be.false();
  it(false).should.not.be.true();

  it(true).should.be.truthy();
  it(true).should.not.be.falsy();
  it(false).should.be.falsy();
  it(false).should.not.be.truthy();
});

test("it and falsy values", () => {
  // https://guide.freecodecamp.org/javascript/falsy-values/
  // undefined, null, NaN, 0, ""

  var string = ""; // <-- falsy
  it(string).should.be.falsy();

  var filledString = "some string in here"; // <-- truthy
  it(filledString).should.be.truthy();

  var zero = 0; // <-- falsy
  it(zero).should.be.falsy();

  var numberGreaterThanZero = 1; // <-- truthy
  it(numberGreaterThanZero).should.be.truthy();

  var emptyArray = []; // <-- truthy, we'll explore more about this next
  it(emptyArray).should.be.truthy();

  var emptyObject = {}; // <-- truthy
  it(emptyObject).should.be.truthy();
});

test("fun 😝  arrays falsy and truthy", () => {
  var a = [] == false; // <-- truthy, will run code in if-block
  it(a).should.be.truthy();

  var b = []; // <-- truthy, will also run code in if-block
  it(b).should.be.truthy();

  var c = [] == true; // <-- falsy, will NOT run code in if-block
  it(c).should.be.falsy();

  var d = ![]; // <-- falsy, will also NOT run code in if-block
  it(d).should.be.falsy();
});
