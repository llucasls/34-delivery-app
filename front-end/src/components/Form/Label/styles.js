import styled from 'styled-components';

export const StyledContainerLabel = styled.div``;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ size }) => size}px;
  color: ${({ theme }) => theme.colors.black};
`;
