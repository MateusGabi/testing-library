module.exports = function(tabs) {
  return new Array(tabs).fill().reduce(acc => acc.concat("    "), "");
};
