function sumMul(n, m) {
  let sum = 0;
  let i = 1;
  while (n * i < m) {
    sum += n * i;
    i++;
  }
  return sum || "INVALID";
}
