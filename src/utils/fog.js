/**
 * FOG(x) = f(g(x))
 */
module.exports = function fog(g) {
  return function(x) {
    return g(x);
  };
};
