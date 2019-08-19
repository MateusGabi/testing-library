module.exports = function toThrow(func, error) {
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
};
