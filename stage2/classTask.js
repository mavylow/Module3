class Product {
  static ProductDiscount = new WeakMap();
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  setDiscount(discount) {
    Product.ProductDiscount.set(this, discount);
    console.log(Product.ProductDiscount);
  }
  getDiscount() {
    console.log(Product.ProductDiscount);
    return Product.ProductDiscount.get(this);
  }
}

export { Product };
