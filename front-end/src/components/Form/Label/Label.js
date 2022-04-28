import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainerLabel, StyledLabel } from './styles';

const Label = ({ size, children, ...rest }) => (
  <StyledContainerLabel>
    <StyledLabel size={ size } { ...rest }>
      { children }
    </StyledLabel>
  </StyledContainerLabel>
);

export default Label;

Label.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
