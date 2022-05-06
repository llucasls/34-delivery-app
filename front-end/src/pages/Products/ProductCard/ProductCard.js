import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import currencyBrl from '../../../helpers/currencyBrl';
import handleAddToCart,
{ handleRemoveToCart } from '../../../helpers/saveCartLocalStorage';
import { useAppDispatch } from '../../../store';

import { SET_ADD_TO_CART, SET_ADD_AMOUNT } from '../../../store/slices/ProductCartTotal';

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

  const increaseAmount = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    setTotal((newAmount) * product.price);
    handleAddToCart(product, total.toFixed(2));
  };

  const decreaseAmount = () => {
    const newAmount = amount - 1;
    setAmount(Math.max(0, newAmount));
    setTotal((newAmount) * product.price);
    handleRemoveToCart(product);
  };

  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   dispatch(SET_ADD_AMOUNT({ amount: { [name]: Number(value) } }));
  // };

  useEffect(() => {
    dispatch(SET_ADD_AMOUNT({ amount }));
    dispatch(SET_ADD_TO_CART({ total }));
  }, [amount, dispatch, total]);

  // useEffect(() => {
  //   handleAddToCart(product, total.toFixed(2));
  // });

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
        {`${currencyBrl(Number(product.price))}`}
      </StyledSpan>
      <StyledSpan>{ currencyBrl(total) }</StyledSpan>

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
          name="amount"
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
