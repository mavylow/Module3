Function.prototype.bind = function (ctx) {
  const func = this._originalFunc || this;

  const bindFunc = () => func.call(ctx);

  bindFunc._originalFunc = func;

  return bindFunc;
};
