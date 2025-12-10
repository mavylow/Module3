Array.prototype.reduce = function (process, initial) {
  for (let i = 0; i < this.length; i++) {
    initial = initial ? process(initial, this[i]) : this[i];
  }
  return initial;
};
