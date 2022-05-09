import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import currencyBrl from '../../../helpers/currencyBrl';
import handleAddToCart,
{ handleRemoveToCart } from '../../../helpers/saveCartLocalStorage';
import { SET_ADD_TO_CART } from '../../../store/slices/ProductCartTotal';
import { useAppDispatch } from '../../../store';

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
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // transforma o valor em 0 caso não seja um número
  const handleChange = ({ target }) => {
    if (Number.isNaN(Number(target.value))) {
      target.value = 0;
    }
    setAmount(Number(target.value));
  };

  // aumenta a quantidade em 1 e chama o handleChange
  const increaseAmount = ({ target }) => {
    const input = target.previousSibling;
    input.value = Number(input.value) + 1;
    handleChange({ target: input });
    handleAddToCart(product);
  };

  // diminui a quantidade em 1 e chama o handleChange
  const decreaseAmount = ({ target }) => {
    const input = target.nextSibling;
    input.value = Math.max(Number(input.value) - 1, 0);
    handleChange({ target: input });
    handleRemoveToCart(product);
  };

  useEffect(() => {
    setTotal(amount * product.price);
  }, [amount, product.price, setTotal]);

  useEffect(() => {
    const addTotal = () => {
      dispatch(SET_ADD_TO_CART({ product_cart_total: total }));
    };
    addTotal();
  }, [dispatch, total]);

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
        { `${currencyBrl(Number(product.price))}` }
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
          name="amount"
          defaultValue="0"
          type="text"
          onChange={ handleChange }
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
