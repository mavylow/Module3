function zero(func) {
  const num = 0;
  return calculate(func, num);
}
function one(func) {
  const num = 1;
  return calculate(func, num);
}
function two(func) {
  const num = 2;
  return calculate(func, num);
}
function three(func) {
  const num = 3;
  return calculate(func, num);
}
function four(func) {
  const num = 4;
  return calculate(func, num);
}
function five(func) {
  const num = 5;
  return calculate(func, num);
}
function six(func) {
  const num = 6;
  return calculate(func, num);
}
function seven(func) {
  const num = 7;
  return calculate(func, num);
}
function eight(func) {
  const num = 8;
  return calculate(func, num);
}
function nine(func) {
  const num = 9;
  return calculate(func, num);
}

function plus(arg) {
  return `+${arg}`;
}
function minus(arg) {
  return `-${arg}`;
}
function times(arg) {
  return `*${arg}`;
}
function dividedBy(arg) {
  return `/${arg}`;
}

function calculate(func, num) {
  if (!func) {
    return num;
  }
  return Math.floor(eval(`${num}${func}`));
}
