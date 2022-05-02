import React from 'react';

const ProductCard = () => {
  // verifica se o usuário colocou um número no input
  const validateInput = ({ target }) => {
    if (Number.isNaN(Number(target.value))) {
      target.value = 0;
    }
  };

  return (
    <div id="product-card">
      { /* placeholder tag */ }
      <div id="product-image" />
      <div id="product-label">
        descrição do produto
      </div>
      <div id="product-amount">
        <button type="button">-</button>
        <input type="text" onChange={ validateInput } />
        <button type="button">+</button>
      </div>
    </div>
  );
};

export default ProductCard;
