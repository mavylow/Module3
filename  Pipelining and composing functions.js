function pipeline(seed, ...args) {
  if (seed && args.length) {
    return args.reduce((acc, func) => (acc = func(acc)), seed);
  } else {
    return seed;
  }
}

function compose(...funcs) {
  return function (arg) {
    return funcs.reduceRight((acc, func) => (acc = func(acc)), arg);
  };
}
