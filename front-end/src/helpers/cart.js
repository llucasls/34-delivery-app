class Cart {
  constructor() {
    this.cart = localStorage.getItem('cart') || '{}';
  }

  create(product) {
  }

  read() {
    const productCart = 
  }

  readOne(id) {
  }

  update(id, product) {
  }

  delete(id) {
  }
}

const cart = new Cart();

export default cart;
