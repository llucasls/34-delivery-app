import styled from 'styled-components';

export const StyledViewButton = styled.div`
  width: 100%;
`;

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-size: ${(props) => props.size}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;
