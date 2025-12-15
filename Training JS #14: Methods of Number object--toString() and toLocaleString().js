function colorOf(r, g, b) {
  const hex = (color) =>
    color.toString(16).length === 1
      ? "0" + color.toString(16)
      : color.toString(16);
  return [r, g, b].reduce((acc, col) => acc + hex(col), "#");
}
