function grabDoll(dolls) {
  var bag = [];
  for (let doll of dolls) {
    if (bag.length >= 3) {
      break;
    }
    if (["Hello Kitty", "Barbie doll"].includes(doll)) {
      bag.push(doll);
    } else {
      continue;
    }
  }

  return bag;
}
