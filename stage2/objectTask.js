const person = {
  name: "Sofia",
  age: 20,
  job: "developer",
};

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

export { person };
