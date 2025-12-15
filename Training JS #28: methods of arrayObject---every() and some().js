function mirrorImage(arr) {
  var a, b;
  let result = arr.some((number, i) => {
    a = number;
    b = arr[i + 1];
    return number === Number(String(b).split("").reverse().join(""));
  });
  return result ? [a, b] : [-1, -1];
}
