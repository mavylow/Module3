ShoppingCart.prototype.addButtonClicked = function (item) {
  this.checkQuantityAsync(item, (item) => this.addButtonClicked1(item));
};

ShoppingCart.prototype.addButtonClicked1 = function ({ item, quantity }) {
  if (quantity > 0) {
    this.addToCartAsync(item, 1, this.addButtonClicked2.bind(this));
  }
};

ShoppingCart.prototype.addButtonClicked2 = function (success) {
  const self = this;
  if (success) {
    this.updateCartDisplayAsync(function () {
      self.addButtonClicked3.call(self, success);
    });
  }
};

ShoppingCart.prototype.addButtonClicked3 = function (success) {
  this.showMessage(
    `${success ? "Successfully" : "Unsuccessfully"} added item to cart`
  );
};
