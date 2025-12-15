function persistence(num) {
  let count = 0;
  while (num - 10 >= 0) {
    num = num
      .toString()
      .split("")
      .reduce((acc, el) => acc * Number(el), 1);
    count++;
  }
  return count;
}
