import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledTextError } from './styles';

const Input = ({ name, error = '', ...rest }) => (
  <>
    {error && <StyledTextError>{error}</StyledTextError>}
    <StyledInput { ...rest } />
  </>
);

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
