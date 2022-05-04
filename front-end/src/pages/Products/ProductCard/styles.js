import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.green_withe};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border: 1px solid #ccc;
  margin: 30px;
`;

export const StyledLabel = styled.div`
  text-align: center;
  font-size: 20px;
`;

export const StyledImage = styled.img`
  width: 250px;
  height: 200px;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-size: 40px;
`;

export const StyledAmount = styled.span`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  margin: 0 10px;
`;

export const StyledSpan = styled.span`
  display: flex;
  justify-content: left;
  margin: 20px;
  font-size: 18px;
`;
