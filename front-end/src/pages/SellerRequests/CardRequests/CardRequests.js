import React, { useEffect } from 'react';

import { StyledContainer, StyledText } from './styles';

const CardRequests = ({ data }) => {
  useEffect(() => {
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <StyledText>CardRequests</StyledText>
    </StyledContainer>
  );
};

export default CardRequests;
