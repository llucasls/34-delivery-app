import styled from 'styled-components';

import { StyledRow as Row, StyledColumn as Column } from '../CardOrder/styles';

const { width, height } = window.screen;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
export const StyledTitle = styled.h3``;

export const StyledText = styled.p`
  font-size: ${({ size }) => `${size}rem` || '1rem'};
  font-weight: 600;
  text-transform: ${({ upper }) => (upper ? 'uppercase' : 'none')};
`;

export const StyledContainerBoard = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledHeaderBoard = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.gray_background};
`;

export const StyledContainerItem = styled.div``;

export const StyledRow = styled(Row)``;
export const StyledColumn = styled(Column)``;
