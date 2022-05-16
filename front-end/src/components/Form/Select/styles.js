import styled from 'styled-components';

import { StyledTextError as TextError } from '../Input/styles';

export const StyledSelectInput = styled.select`
  font-family: ${({ theme }) => theme.fonts.roboto};
  border-radius: 5px;
  padding: 10px;
  border-width: 0.1rem;
  border-color: ${({ error }) => (error ? '#F00' : '#000')};
  background-color: ${({ error }) => (error ? '#FFCCCB' : '#fff')};
  margin:5px 0 10px 0;
`;

export const StyledOption = styled.option`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledTextError = styled(TextError)``;
