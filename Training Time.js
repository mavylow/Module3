function shuffleIt(arr, ...arg) {
  arg.forEach((el) => {
    const [a, b] = el;
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}
