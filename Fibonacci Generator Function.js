function* fibonacci() {
  let a = 0;
  let b = 1;
  yield a;
  yield b;
  while (true) {
    let temp = a;
    yield a + b;
    a = b;
    b = temp + a;
  }
}

// function* fibonacci() {
//     let [curr, next] = [0, 1];
//     while (true) {
//       yield curr;
//       [curr, next] = [next, next + curr];
//     }
//   }
