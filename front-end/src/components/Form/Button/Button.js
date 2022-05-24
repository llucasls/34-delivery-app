import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

const Button = ({ size, title, ...rest }) => (
  <StyledButton size={ size } { ...rest }>
    {title}
  </StyledButton>
);

export default Button;

Button.propTypes = {
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
