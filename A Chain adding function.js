function add(n) {
  const sum = function (b) {
    return add(n + b);
  };
  sum.valueOf = function () {
    return n;
  };
  return sum;
}
