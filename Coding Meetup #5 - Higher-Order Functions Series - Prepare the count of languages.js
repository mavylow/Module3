function countLanguages(list) {
  let result = {};
  list.forEach((dev) =>
    result[dev.language] ? result[dev.language]++ : (result[dev.language] = 1)
  );
  return result;
}
