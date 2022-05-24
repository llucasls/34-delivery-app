import React from 'react';

import {
  StyledContainer,
  StyledRow,
  StyledBaseButton,
  StyledAmountInput,
} from './styles';

const Counter = () => (
  <StyledContainer>
    <StyledRow>
      <StyledBaseButton left>-</StyledBaseButton>
      <StyledAmountInput />
      <StyledBaseButton right>+</StyledBaseButton>
    </StyledRow>
  </StyledContainer>
);

export default Counter;
