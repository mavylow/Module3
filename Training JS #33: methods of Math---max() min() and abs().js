function maxMin(arr1, arr2) {
  let res = arr1.map((el, i) => Math.abs(el - arr2[i]));
  return [Math.max(...res), Math.min(...res)];
}
