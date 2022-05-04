import styled from 'styled-components';

export const StyledPage = styled.div`
  margin-top: 80px;
  padding: 20px;
`;

export const StyledProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 100%;
`;

export const StyledButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.green_withe};
  width: 300px;
  height: 100px;
  border: none;
  border-radius: 5px;
  background-color: #036B52;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
`;

export const StyledText = styled.span`
`;

export default StyledPage;
