const spacer = require("./utils/spacer");

function assert(desc, cond) {
  this.__test_cases__ = this.__test_cases__ + 1;

  if (cond) {
    console.log(spacer(2), "✅", spacer(1), desc);
    this.__test_success__ = this.__test_success__ + 1;
  } else {
    console.error(spacer(2), "💩", spacer(1), desc);
    this.__test_errors__ = this.__test_errors__ + 1;
    // TODO: --explodeError
    // throw new Error(`Test case doesn't match!`);
  }
}

module.exports = function(cond) {
  return {
    should: {
      be: {
        true: function() {
          return assert("it should be true", cond === true);
        },
        false: function() {
          return assert("it should be false", cond === false);
        },
        truthy: function() {
          return assert("it should be truthy", Boolean(cond));
        },
        falsy: function() {
          return assert("it should be falsy", cond == false);
        },
        null: function() {
          return assert("it should be null", cond === null);
        },
        instanceOf: {
          function: function() {
            return assert(
              `it should be instance of Function`,
              cond instanceof Function
            );
          }
        }
      },
      not: {
        be: {
          true: function() {
            return assert("it should not be true", cond !== true);
          },
          false: function() {
            return assert("it should not be false", cond !== false);
          },
          truthy: function() {
            return assert("it should not be truthy", cond != true);
          },
          falsy: function() {
            return assert("it should not be falsy", cond != false);
          },
          null: function() {
            return assert("it should not be null", cond !== null);
          },
          undefined: function() {
            return assert("it should not be undefined", cond !== undefined);
          },
          instanceOf: {
            boolean: function() {
              return assert(
                `it should not be instance of Boolean`,
                !(cond instanceof Boolean)
              );
            },
            number: function() {
              return assert(
                `it should not be instance of Number`,
                !(cond instanceof Number)
              );
            },
            string: function() {
              return assert(
                `it should not be instance of String`,
                !(cond instanceof String)
              );
            }
          }
        }
      }
    }
  };
};
