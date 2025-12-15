function sortIt(arr) {
  const copy = arr.slice();
  const includes = {};
  copy.forEach((el) => (includes[el] ? includes[el]++ : (includes[el] = 1)));
  return copy
    .sort((a, b) => includes[a] - includes[b])
    .sort((a, b) => (includes[a] === includes[b] ? b - a : 0));
}
