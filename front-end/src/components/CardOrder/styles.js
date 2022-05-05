import styled from 'styled-components';

const { width } = window.screen;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${({ size }) => width * size}px;
  height: 150px;
  background-color: #EAF1EF;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
`;

export const StyledText = styled.p`
  text-align: ${({ align }) => align || 'left'};
  font-size: ${({ size }) => `${size}rem` || '1rem'};
  font-weight: 600;
  text-transform: ${({ upper }) => (upper ? 'uppercase' : 'none')};
`;

export const StyledColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRow = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
