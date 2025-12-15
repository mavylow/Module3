function rndCode() {
  const arr = Array.from({ length: 8 }).map((el, i) => {
    if (i + 1 <= 2) {
      return String.fromCharCode(getRandomNumberRange(65, 77));
    }
    if (i + 1 <= 6) {
      return String.fromCharCode(getRandomNumberRange(48, 57));
    }
    if (i + 1 <= 8) {
      return specialCharacter[
        getRandomNumberRange(0, specialCharacter.length - 1)
      ];
    }
  });
  return arr.join("");
}

function getRandomNumberRange(from, to) {
  return ~~((to - from) * Math.random() + from);
}

const specialCharacter = "~!@#$%^&*".split("");
