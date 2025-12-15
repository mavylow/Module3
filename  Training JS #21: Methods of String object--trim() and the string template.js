function fiveLine(s) {
  const word = s.trim();
  const arr = Array.from({ length: 5 }, () => word).map((el, i) =>
    i === 0 ? `${word}` : `\n${word.repeat(i + 1)}`
  );
  return arr.join("");
}
