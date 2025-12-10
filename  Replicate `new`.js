function nouveau(Constructor, ...args) {
  let newObj = {};
  newObj.__proto__ = Constructor.prototype;
  const res = Constructor.apply(newObj, args);

  if (res != null && (typeof res === "object" || typeof res === "function")) {
    return res;
  }
  return newObj;
}
