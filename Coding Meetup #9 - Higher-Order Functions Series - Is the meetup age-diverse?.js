function isAgeDiverse(list) {
  let age = 10;
  while (age < 100) {
    let ageGroup = list.filter((dev) => dev.age >= age && dev.age < age + 10);
    if (!ageGroup.length) return false;
    age += 10;
  }
  return list.filter((dev) => dev.age >= 100).length ? true : false;
}
