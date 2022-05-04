import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer, StyledText } from './styles';

const CardRequests = ({ data }) => {
  useEffect(() => {
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <StyledContainer>
      <StyledText>CardRequests</StyledText>
    </StyledContainer>
  );
};

CardRequests.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  })).isRequired,
};

export default CardRequests;
