function tailAndHead(arr) {
  let prod = 1;
  arr.reduce((prev, curr) => {
    let tail = prev % 10;
    let head = +(curr + "")[0];
    prod *= tail + head;
    return curr;
  });
  return prod;
}
