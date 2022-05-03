import styled from 'styled-components';

const { width } = window.screen;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const StyledText = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;

export const StyledContainerInfoUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => width * size}px;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledButton = styled.button`
  width: ${({ size }) => width * size}px;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.roboto};
  background-color: 'transparent';
  border: none;
  cursor: pointer;
`;
