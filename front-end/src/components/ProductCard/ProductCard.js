import React from 'react';
import { StyledCard, StyledLabel, StyledInputContainer, StyledButton } from './styles';

const ProductCard = () => {
  // imagem provisória
  const beer = 'https://uploads-ssl.webflow.com/5d822e148992386c1ec80483/5da3bc9020ae1b76bd397815_TCBC-Images-OnTap.jpg';

  return (
    <StyledCard>
      <img alt="product" src={ beer } />
      <StyledLabel>
        descrição do produto
      </StyledLabel>
      <StyledInputContainer>
        <StyledButton type="button">-</StyledButton>
        <StyledButton type="button">+</StyledButton>
      </StyledInputContainer>
    </StyledCard>
  );
};

export default ProductCard;
