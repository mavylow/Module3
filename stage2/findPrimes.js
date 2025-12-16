async function findPrimes(start, end) {
  const numbers = Array.from({ length: end - start + 1 }, (_, i) => i + start);
  const promises = [];
  let chunkStart = 0;
  for (let i = 0.1; i <= 1; i += 0.1) {
    let chunkEnd = Math.ceil(i * numbers.length);
    const part = numbers.slice(chunkStart, chunkEnd);
    const promise = findPrimeChunk(i, part);
    promises.push(promise);
    chunkStart = chunkEnd;
  }
  const res = await Promise.all(promises);

  return res.flat();
}
const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const findPrimeChunk = async (i, arr) => {
  let part = arr.filter((el) => isPrime(el));
  console.log(`Прогресс ${Math.round(i * 100)}%`, part);
  return part;
};

export { findPrimes };
