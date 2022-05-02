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
  margin: 0;
`;

export const StyledContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.green_withe};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
