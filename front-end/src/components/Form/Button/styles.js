import styled from 'styled-components';

const StyledButton = styled.button`
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
  font-weight: 400;
  padding: 7px;
  margin-bottom: 10px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default StyledButton;
