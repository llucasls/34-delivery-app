import React from 'react';
import {
  StyledNavBar,
  StyledLinkProducts,
  StyledLinkOrders,
  StyledUserName,
  StyledLinkLogout,
} from './styles';
import { useAppSelector } from '../../store';

const NavBar = () => {
  const { name } = useAppSelector((state) => state.userReducer.user);
  return (
    <StyledNavBar>
      <StyledLinkProducts data-testid="element-navbar-link-products">
        Produtos
      </StyledLinkProducts>
      <StyledLinkOrders data-testid="element-navbar-link-orders">
        Meus Pedidos
      </StyledLinkOrders>
      <StyledUserName data-testid="element-navbar-user-full-name">
        { name }
      </StyledUserName>
      <StyledLinkLogout data-testid="element-navbar-link-logout">
        Sair
      </StyledLinkLogout>
    </StyledNavBar>
  );
};

export default NavBar;

// 11: customer_products - element-navbar-link-products
// 12: customer_products - element-navbar-link-orders
// 13: customer_products - element-navbar-user-full-name
// 14: customer_products - element-navbar-link-logout
