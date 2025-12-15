import { Product } from "./classTask.js";
import { findPrimes } from "./findPrimes.js";
import { person } from "./objectTask.js";

const testClass = () => {
  let milk = new Product("milk", 12);
  milk.setDiscount(0.06);
  console.log(milk.getDiscount());
  milk = null;

  let coffee = new Product("coffee", 15);
  coffee.setDiscount(0.1);

  setTimeout(() => {
    console.log("Product: ", Product.ProductDiscount);
  }, 1000);
};

const testObject = () => {
  console.log(person.name);
  person.name = "Alena";
  console.log(person.name); // output Sofia

  for (let prop in person) {
    console.log(person[prop]); // output 20 developer - no name included
  }

  delete person.name;
  console.log(person.name); // property still exist

  //can`t change descriptor if  configurable: false - lead to TypeError
  Object.defineProperty(person, "name", {
    writable: true,
  });
};

// // testObject();
// testClass();
const res = await findPrimes(1, 100_000_000);
console.log(res);
