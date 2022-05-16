import styled from 'styled-components';

export const StyledContainer = styled.div``;
export const StyledRow = styled.div``;

export const StyledBaseButton = styled.button`
  height: 50px;
  width: 50px;
  border-bottom-left-radius: ${({ right }) => (right ? '0px' : '5px')};
  border-bottom-right-radius: ${({ left }) => (left ? '0px' : '5px')};
  border-top-left-radius: ${({ right }) => (right ? '0px' : '5px')};
  border-top-right-radius: ${({ left }) => (left ? '0px' : '5px')};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
`;

export const StyledAmountInput = styled.input`
  height: 50px;
  width: 60px;
`;
