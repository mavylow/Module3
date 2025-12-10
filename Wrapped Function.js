Object.defineProperty(Function.prototype, "wrap", {
  value: function wrap(wrappedFunc, ...args) {
    return (...args) => wrappedFunc(this, ...args);
  },
});
