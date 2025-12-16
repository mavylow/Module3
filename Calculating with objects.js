Num.prototype[Symbol.toPrimitive] = function (hint) {
  if (hint === "number" || hint === "default") {
    return this.num;
  }
  if (hint === "string") {
    return this.toString();
  }
};
