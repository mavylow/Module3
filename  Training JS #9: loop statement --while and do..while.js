function padIt(str, n) {
  let i = 1;
  while (i <= Math.ceil(n / 2)) {
    str = "*" + str;
    i++;
  }
  while (i <= n) {
    str += "*";
    i++;
  }
  return str;
}
