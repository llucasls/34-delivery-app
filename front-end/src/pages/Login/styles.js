import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledText = styled.p`
  font-family: ${(props) => props.theme.fonts.roboto};
`;

export const StyledContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
