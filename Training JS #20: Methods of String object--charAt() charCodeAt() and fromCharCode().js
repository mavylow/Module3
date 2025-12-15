function topSecret(str) {
  return str
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char) => String.fromCharCode(shift(char)))
        .join("")
    )
    .join(" ");
}

function shift(char) {
  if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
    return char.charCodeAt() - 3 >= 65
      ? char.charCodeAt() - 3
      : char.charCodeAt() - 3 + 26;
  }
  if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
    return char.charCodeAt() - 3 >= 97
      ? char.charCodeAt() - 3
      : char.charCodeAt() - 3 + 26;
  }
  return char.charCodeAt();
}
//question1: The top secret file number is...
answer1 = 2249;
//question2: Super agent's name is...
answer2 = "MtEO";
//question3: He stole the treasure is...
answer3 = "Train tire";
