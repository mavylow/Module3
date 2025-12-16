async function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful;

  await OrderAPI.getShoppingCartAsync(user).then(function (cart) {
    shoppingCart = cart;
  });

  await CustomerAPI.getProfileAsync(user).then(function (profile) {
    zipCode = profile.zipCode;
  });

  shippingRate = calculateShipping(shoppingCart, zipCode);

  await OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function (
    success
  ) {
    orderSuccessful = success;
  });

  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}
