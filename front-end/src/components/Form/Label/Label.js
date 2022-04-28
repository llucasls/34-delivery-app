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
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
