function alienLanguage(str) {
  return str
    .split(" ")
    .map(
      (word) =>
        word.slice(0, word.length - 1).toUpperCase() +
        word.slice(-1).toLowerCase()
    )
    .join(" ");
}
