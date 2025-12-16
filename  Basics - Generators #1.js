function* generator() {
  let i = 1;
  let result = null;
  while (true) {
    result = yield result || i++;
  }
}
