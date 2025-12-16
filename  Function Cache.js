function cache(func) {
  let res = new Map();
  return function (...args) {
    if (res.has(JSON.stringify([...args]))) {
      return res.get(JSON.stringify([...args]));
    } else {
      res.set(JSON.stringify([...args]), func(...args));
    }
    return res.get(JSON.stringify([...args]));
  };
}
