import styled from 'styled-components';

import { StyledContainer as Container,
  StyledContainerForm as ContainerForm } from '../Login/styles';

export const StyledContainer = styled(Container)``;
export const StyledContainerForm = styled(ContainerForm)``;

export const StyledText = styled.h2`
display: flex;
justify-content: center;
font-family: ${(props) => props.theme.fonts.roboto};
`;
