import React from 'react';
import { StyledCard, StyledLabel, StyledInputContainer, StyledButton } from './styles';

const ProductCard = () => {
  // verifica se o usuário colocou um número no input
  const validateInput = ({ target }) => {
    if (Number.isNaN(Number(target.value))) {
      target.value = 0;
    }
  };

  // imagem provisória
  const beer = 'https://uploads-ssl.webflow.com/5d822e148992386c1ec80483/5da3bc9020ae1b76bd397815_TCBC-Images-OnTap.jpg';

  return (
    <StyledCard>
      { /* placeholder tag */ }
      <img alt="product" src={ beer } />
      <StyledLabel>
        descrição do produto
      </StyledLabel>
      <StyledInputContainer>
        <StyledButton type="button">-</StyledButton>
        <input type="text" onChange={ validateInput } />
        <StyledButton type="button">+</StyledButton>
      </StyledInputContainer>
    </StyledCard>
  );
};

export default ProductCard;
