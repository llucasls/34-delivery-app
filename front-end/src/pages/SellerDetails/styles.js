import styled from 'styled-components';

import { StyledContainer as Container, StyledText as Text } from '../Login/styles';

export const StyledContainer = styled(Container)``;
export const StyledText = styled(Text)``;
export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const StyledColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;
