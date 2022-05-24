import React from 'react';
import PropTypes from 'prop-types';

import { StyledSelectInput, StyledOption, StyledTextError } from './styles';

const Select = ({ name, options, ...rest }) => {
  const renderOption = (option, index) => (
    <StyledOption key={ index } value={ option }>{option}</StyledOption>
  );

  return (
    <>
      {error && <StyledTextError>{error}</StyledTextError>}
      <StyledSelectInput name={ name } { ...rest }>
        <StyledOption value="">Selecione</StyledOption>
        {options.map((option, index) => renderOption(option, index))}
      </StyledSelectInput>
    </>
  );
};

export default Select;

Select.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
