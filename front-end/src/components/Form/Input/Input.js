import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { StyledContainer, StyledInput } from './styles';

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <StyledContainer>
      <StyledInput
        onFocus={ clearError }
        ref={ inputRef }
        defaultValue={ defaultValue }
        { ...rest }
      />
    </StyledContainer>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
