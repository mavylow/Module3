function getCount(words) {
  let result = { vowels: 0, consonants: 0 };

  if (typeof words === "string") {
    [...words.trim().toLowerCase()].forEach(
      (char) =>
        ("aeiou".includes(char) && result.vowels++) ||
        ("bcdfghjklmnpqrstvwxz".includes(char) && result.consonants++)
    );
    return result;
  }
  return result;
}
