// export const cartTotal = () => {
//   const cartProducts = (JSON.parse(localStorage.getItem('cart')) || []);
//   const result = cartProducts
//     .reduce((acc, curr) => acc + Number(curr.price) * curr.amount, 0);
//   return result;
// };

// const handleAddToCart = (product) => {
//   const NOT_FOUND = -1;
//   product.amount = 1;
//   const cart = JSON.parse(localStorage.getItem('cart'));

//   if (cart !== null) {
//     const productIndex = cart
//       .findIndex((cartProduct) => cartProduct.id === product.id);

//     if (productIndex !== NOT_FOUND) {
//       cart[productIndex].amount += 1;
//       localStorage.setItem('cart', JSON.stringify([...cart]));
//     } else {
//       localStorage.setItem('cart', JSON.stringify([...cart, product]));
//     }
//   } else {
//     localStorage.setItem('cart', JSON.stringify([product]));
//   }
// };

export const handleSetAmountToCart = (product, amount) => {
  const NOT_FOUND = -1;
  product.amount = Number(amount);
  const cart = JSON.parse(localStorage.getItem('cart'));

  if (cart !== null) {
    const productIndex = cart
      .findIndex((cartProduct) => cartProduct.id === product.id);
    if (Number(amount) < 1) {
      localStorage.setItem('cart',
        JSON.stringify([...cart.filter((cartProduct) => cartProduct.id !== product.id)]));
    } else if (productIndex !== NOT_FOUND) {
      cart[productIndex].amount = Number(amount);
      localStorage.setItem('cart', JSON.stringify([...cart]));
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
    }
  } else {
    localStorage.setItem('cart', JSON.stringify([product]));
  }
};

// export const handleRemoveToCart = (product) => {
//   const NOT_FOUND = -1;
//   product.amount = -1;
//   const cart = JSON.parse(localStorage.getItem('cart'));

//   if (cart !== null) {
//     const productIndex = cart
//       .findIndex((cartProduct) => cartProduct.id === product.id);

//     if (productIndex !== NOT_FOUND) {
//       cart[productIndex].amount -= 1;
//       localStorage.setItem('cart', JSON.stringify([...cart]));
//     }
//     if (cart[productIndex].amount === 0) {
//       localStorage.setItem('cart',
//         JSON.stringify([...cart.filter((cartProduct) => cartProduct.id !== product.id)]));
//     }
//   }
// };

export const getProductById = (id) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const product = cart?.find((cartItem) => cartItem.id === id);
  return product;
};

// export const handleInputAddToCart = (product, quantity) => {
//   const NOT_FOUND = -1;
//   product.amount = 1;
//   const cart = JSON.parse(localStorage.getItem('cart'));

//   if (cart !== null) {
//     const productIndex = cart
//       .findIndex((cartProduct) => cartProduct.id === product.id);
//     if (cart[productIndex].amount === 0) {
//       localStorage.setItem('cart',
//         JSON.stringify([...cart.filter((cartProduct) => cartProduct.id !== product.id)]));
//     }
//     if (productIndex !== NOT_FOUND) {
//       cart[productIndex].amount += quantity;
//       localStorage.setItem('cart', JSON.stringify([...cart]));
//     } else {
//       localStorage.setItem('cart', JSON.stringify([...cart, product]));
//     }
//   } else {
//     localStorage.setItem('cart', JSON.stringify([product]));
//   }
// };

// export default handleAddToCart;
