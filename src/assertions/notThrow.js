module.exports = function notThrow(func) {
  return !toThrow(func);
};
