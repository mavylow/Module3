function findSimilarity(str, word) {
  const reg = word[0] + word.slice(1, -1).replace(/./g, ".") + word.slice(-1);
  return (str.match(new RegExp("\\b" + reg + "\\b", "g")) || []).join(" ");
}

// function findSimilarity(str, word) {
//   const reg =
//     "^" + word[0] + word.slice(1, -1).replace(/./g, ".") + word.slice(-1) + "$";
//   return str
//     .split(/ /)
//     .filter((word) => new RegExp(reg).test(word))
//     .join(" ");
// }
