import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './styles';

const Input = ({ name, ...rest }) => (
  <StyledInput { ...rest } />
);

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
