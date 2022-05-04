import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  StyledCard,
  StyledSpan,
  StyledLabel,
  StyledInputContainer,
  StyledButton,
  StyledImage,
  StyledAmount,
} from './styles';

const ProductCard = ({ product }) => {
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    setAmount(Math.max(amount - 1, 0));
  };

  const { id } = product;

  return (
    <StyledCard>
      <StyledImage
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ product.url_image }
        alt={ product.name }
      />
      <StyledLabel
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {product.name}
      </StyledLabel>
      <StyledSpan
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`R$ ${product.price}`}
      </StyledSpan>
      <StyledInputContainer>
        <StyledButton
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ decreaseAmount }
        >
          -
        </StyledButton>
        <StyledAmount
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ amount }
          type="text"
        />
        <StyledButton
          type="button"
          data-testid={
            `customer_products__button-card-add-item-${id}`
          }
          onClick={ increaseAmount }
        >
          +
        </StyledButton>
      </StyledInputContainer>
    </StyledCard>
  );
};

ProductCard.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductCard;
