const getDivisorsCnt = (n) => {
  if (n === 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count = i === Math.sqrt(n) ? count + 1 : count + 2;
    }
  }
  return count;
};
