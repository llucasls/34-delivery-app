import styled from 'styled-components';

export const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.roboto};
  border-radius: 5px;
  padding: 5px 10px;
  border-width: 0.1rem;
  border-color: ${({ error }) => (error ? '#F00' : '#000')};
  background-color: ${({ error }) => (error ? '#FFCCCB' : '#fff')};
  margin:5px 0 10px 0;
`;

export const StyledTextError = styled.span``;
