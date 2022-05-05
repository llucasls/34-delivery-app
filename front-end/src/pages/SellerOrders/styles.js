import styled from 'styled-components';

import { StyledContainer as Container, StyledText as Text } from '../Login/styles';

export const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  justify-content: flex-start;
`;

export const StyledText = styled(Text)``;

export const StyledContainerOrders = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
