var countSheep = function (num) {
  return Array.from({ length: num }, (_, b) => b + 1).reduce(
    (acc, el) => acc + `${el} sheep...`,
    ""
  );
};
