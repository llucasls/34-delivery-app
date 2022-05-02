import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin:5px 0 10px 0;
`;

export const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.roboto};
  border-radius: 5px;
  padding: 5px 10px;
  border-width: 1.2px;
  border-color: ${({ error }) => (error ? '#F00' : '#000')};
  background-color: ${({ error }) => (error ? '#FFCCCB' : '#fff')};
`;
