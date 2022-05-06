export const cartTotal = () => {
  const cartProducts = (JSON.parse(localStorage.getItem('cart')) || []);
  const result = cartProducts
    .reduce((acc, curr) => acc + Number(curr.price) * curr.amount, 0);
  return result;
};

const handleAddToCart = (product, updateCart) => {
  const NOT_FOUND = -1;
  product.amount = 1;
  const cart = JSON.parse(localStorage.getItem('cart'));

  if (cart !== null) {
    const productIndex = cart
      .findIndex((cartProduct) => cartProduct.id === product.id);

    if (productIndex !== NOT_FOUND) {
      cart[productIndex].amount += 1;
      localStorage.setItem('cart', JSON.stringify([...cart]));
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
    }
  } else {
    localStorage.setItem('cart', JSON.stringify([product]));
  }
  updateCart();
};
//   if (cart) {
//     const newCart = [{ ...product, amount }];

//     localStorage.setItem('cart', JSON.stringify([...cart, ...newCart]));

//     // localStorage.setItem('cart', JSON.stringify(cartProducts));
//   } else {
//     localStorage.setItem('cart', JSON.stringify([{ ...product, amount }]));
//   }
// };

export const handleRemoveToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const newCart = cart.indexOf(product);
  cart.splice(newCart, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
};

export default handleAddToCart;
