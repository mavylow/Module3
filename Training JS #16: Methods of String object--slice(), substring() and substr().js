function cutIt(arr) {
  const minLength = arr.reduce(
    (acc, el) => (acc = el.length <= acc.length ? (acc = el) : acc)
  ).length;
  return arr.map((el) => el.slice(0, minLength));
}
