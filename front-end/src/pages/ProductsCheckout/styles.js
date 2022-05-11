import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerAdress = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerAdressBoard = styled.div`
width: 80%;
height: 70%;
display: flex;
flex-direction: row;
border-radius: 5px;
background-color: ${({ theme }) => theme.colors.white};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledTitle = styled.h3`
  align-self: flex-start;
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 10%;
  margin-bottom: 20px;
`;

export const StyledText = styled.p`
  font-size: ${({ size }) => `${size}rem` || '1rem'};
  font-weight: 600;
  text-transform: ${({ upper }) => (upper ? 'uppercase' : 'none')};
`;

export const StyledForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50px;
  width: 100%;
  `;

export const StyledButtomSubmit = styled.button`
position: absolute;
right: 50%;
left: 40%;
bottom: 4%;
width: 20%;
height: 7%;
font-size: ${(props) => props.size}px;
background-color: ${({ theme }) => theme.colors.primary};
border: none;
border-radius: 5px;
color: ${({ theme }) => theme.colors.white};
font-weight: 400;
cursor: pointer;
`;
