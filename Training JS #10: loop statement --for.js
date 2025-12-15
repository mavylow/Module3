function pickIt(arr) {
  let odd = [],
    even = [];
  for (let el of arr) {
    (el % 2 ? odd : even).push(el);
  }
  return [odd, even];
}
