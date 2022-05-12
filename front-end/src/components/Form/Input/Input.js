import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledTextError } from './styles';

const Input = ({ name, error = '', testid, ...rest }) => (
  <>
    {error && <StyledTextError>{error}</StyledTextError>}
    <StyledInput data-testid={ testid } error={ !!error } { ...rest } />
  </>
);

export default Input;

Input.propTypes = {
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
