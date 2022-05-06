export const cartTotal = () => {
  const cartProducts = (JSON.parse(localStorage.getItem('cart')) || []);
  const totalItens = cartProducts
    .reduce((prev, { total }) => prev + Number(total), 0);
  return totalItens;
};

const handleAddToCart = (product, total) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (cart) {
    const newCart = [...cart, { ...product, total }];
    localStorage.setItem('cart', JSON.stringify(newCart));
  } else {
    localStorage.setItem('cart', JSON.stringify([{ ...product, total }]));
  }

  return cartTotal();
};

export const handleRemoveToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const newCart = cart.filter((item) => item.id !== product.id);
  localStorage.setItem('cart', JSON.stringify(newCart));

  return cartTotal();
};

export default handleAddToCart;
