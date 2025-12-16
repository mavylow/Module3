Plugboard = function (wires) {
  if (!wires) {
    return;
  }
  const letters = new Set(wires.split(""));

  if (
    wires.length !== letters.size ||
    wires.length % 2 === 1 ||
    wires.length > 20
  ) {
    throw new Error("Wrong wires");
  }
  this.plugboard = wires
    .split("")
    .map((el, i) => (i % 2 ? `${el}${wires[i - 1]}` : `${el}${wires[i + 1]}`));
  this.process = function (wire) {
    const char = this.plugboard.find((el) => el[0] === wire);
    return char.slice(-1) || wire;
  };
};
