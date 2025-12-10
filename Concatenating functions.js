Function.prototype.pipe = function (func, ...args) {
  return (...args) => func(this(...args));
};
