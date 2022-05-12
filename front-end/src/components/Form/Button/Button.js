import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

const Button = ({ size, title, testid, ...rest }) => (
  <StyledButton data-testid={ testid } size={ size } { ...rest }>
    {title}
  </StyledButton>
);

export default Button;

Button.propTypes = {
  size: PropTypes.number.isRequired,
  testid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
