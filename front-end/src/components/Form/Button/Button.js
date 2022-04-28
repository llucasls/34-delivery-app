import React from 'react';
import PropTypes from 'prop-types';

import { StyledViewButton, StyledButton } from './styles';

const Button = ({ size, title, ...rest }) => (
  <StyledViewButton>
    <StyledButton size={ size } { ...rest }>
      {title}
    </StyledButton>
  </StyledViewButton>
);

export default Button;

Button.propTypes = {
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
