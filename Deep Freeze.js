Object.deepFreeze = function (object) {
  Object.freeze(object);
  for (let prop in object) {
    Object.deepFreeze(object[prop]);
  }
};
