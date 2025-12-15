function firstToLast(str, c) {
  return str.indexOf(c) !== -1 ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}
