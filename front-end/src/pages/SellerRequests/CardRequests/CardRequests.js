import React from 'react';
import PropTypes from 'prop-types';

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

CardRequests.propTypes = {
  data: PropTypes.arrayOf(shape({})).isRequired,
};

export default CardRequests;
