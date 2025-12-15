function isolateIt(arr) {
  return arr.map((el) => {
    const middle = ~~(el.length / 2);
    const chars = el.split("");
    el.length % 2 === 0
      ? chars.splice(middle, 0, "|")
      : chars.splice(middle, 1, "|");
    return chars.join("");
  });
}
