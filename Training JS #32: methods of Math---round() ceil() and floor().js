function roundIt(n) {
  let [intLength, floatLength] = n
    .toString()
    .split(".")
    .map((el) => el.length);
  if (intLength < floatLength) {
    return Math.ceil(n);
  } else if (intLength > floatLength) {
    return Math.floor(n);
  } else {
    return Math.round(n);
  }
}
