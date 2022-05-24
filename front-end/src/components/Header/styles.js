import styled from 'styled-components';

const { width } = window.screen;

export const StyledContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const StyledText = styled.p`
  font-size: 1.2rem;
  text-align: center;
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
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
