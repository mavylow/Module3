function* generator(a, b) {
  for (let j = a; j <= b; j++) {
    yield (function* () {
      for (let i = 1; i <= 10; i++) yield `${j} x ${i} = ${j * i}`;
    })();
  }
}
