function* generator(a) {
  let res = 1;
  while (true) {
    yield `${a} x ${res} = ${a * res++}`;
  }
}
