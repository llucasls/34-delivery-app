import styled from 'styled-components';

import { StyledRow as Row, StyledColumn as Column } from '../CardOrder/styles';

export const StyledContainer = styled.div`
   width: 100%;
   height: 70vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   align-self: flex-start;
   margin-top: 40px;
`;

export const StyledTitle = styled.h3`
   align-self: flex-start;
   font-size: 1.5rem;
   font-weight: 600;
   margin-bottom: 20px;
   margin-left: 10%;
`;

export const StyledText = styled.p`
   font-size: ${({ size }) => `${size}rem` || '1rem'};
   font-weight: 600;
   text-transform: ${({ upper }) => (upper ? 'uppercase' : 'none')};
 `;

export const StyledContainerBoard = styled.div`
   width: 80%;
   height: 100%;
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

export const StyledContainerTable = styled.table`
   padding: 2rem;
   border-spacing: 0 0.8rem;
`;

export const StyledContainerTableHeader = styled.thead``;

export const StyledContainerTableRow = styled.tr`
   height: 40px;
   font-weight: 600;
   font-size: 1rem;
`;

export const StyledContainerTableColumn = styled.td`
   text-align: center;
   padding: 0 1rem;
   font-size: 16px;
   &:first-child {
     border-bottom-left-radius: 5px;
     border-top-left-radius: 5px;
   }
   &:last-child {
     border-bottom-right-radius: 5px;
     border-top-right-radius: 5px;
   }
`;

export const StyledRow = styled(Row)``;
export const StyledColumn = styled(Column)``;
