import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  margin:5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: '#E5E5E5';
`;

export const StyledLinkProducts = styled.div`
  color: ${({ theme }) => theme.colors.dark_text};
  background-color: ${({ theme }) => theme.colors.secundary};
  padding: 10px 30px;
`;

export const StyledLinkOrders = styled.div`
  color: ${({ theme }) => theme.colors.green_withe};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 30px;
`;

export const StyledUserName = styled.div`
  color: ${({ theme }) => theme.colors.green_withe};
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 10px 30px;
`;

export const StyledLinkLogout = styled.div`
  color: ${({ theme }) => theme.colors.green_withe};
  background-color: ${({ theme }) => theme.colors.quaternary};
  padding: 10px 30px;
`;
