function isSantaClausable(obj) {
  const santaInterface = ["sayHoHoHo", "distributeGifts", "goDownTheChimney"];
  return santaInterface.every((method) => typeof obj[method] === "function");
}
