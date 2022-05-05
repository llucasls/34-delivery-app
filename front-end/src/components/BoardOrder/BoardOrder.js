import React from 'react';

import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledContainerBoard,
  StyledHeaderBoard,
  StyledContainerItem,
} from './styles';

const BoardOrder = ({ data }) => {
  const renderItems = (item) => (
    <StyledContainerItem>
      <StyledText>{item.name}</StyledText>
    </StyledContainerItem>
  );

  return (
    <StyledContainer>
      <StyledTitle>{data.id}</StyledTitle>
      <StyledContainerBoard>
        <StyledHeaderBoard>
          <StyledText>Header</StyledText>
        </StyledHeaderBoard>
        {data.products.map((item) => renderItems(item))}
      </StyledContainerBoard>
    </StyledContainer>
  );
};

export default BoardOrder;
