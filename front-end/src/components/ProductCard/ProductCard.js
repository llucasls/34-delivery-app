import React, { useState } from 'react';
import { useAppSelector } from '../../store';

import {
  StyledCard,
  StyledSpan,
  StyledLabel,
  StyledInputContainer,
  StyledButton,
} from './styles';

const ProductCard = () => {
  const [amount, setAmount] = useState(0);
  const products = useAppSelector((state) => state.productsReducer.products);
  console.log(products);
  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    setAmount(Math.max(amount - 1, 0));
  };

  // imagem provisória
  const beer = 'https://uploads-ssl.webflow.com/5d822e148992386c1ec80483/5da3bc9020ae1b76bd397815_TCBC-Images-OnTap.jpg';

  return (
    <StyledCard>
      <img alt="product" src={ beer } width="250px" height="200px" />
      <StyledLabel>
        descrição do produto
      </StyledLabel>
      <StyledInputContainer>
        <StyledButton type="button" onClick={ decreaseAmount }>-</StyledButton>
        <StyledSpan>{ amount }</StyledSpan>
        <StyledButton type="button" onClick={ increaseAmount }>+</StyledButton>
      </StyledInputContainer>
    </StyledCard>
  );
};

export default ProductCard;
