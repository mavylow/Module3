var summation = function (num) {
  return Array.from({ length: num }, (a, b) => b + 1).reduce(
    (acc, el) => acc + el,
    0
  );
};
