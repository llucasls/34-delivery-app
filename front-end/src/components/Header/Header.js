import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledText,
  StyledRow,
  StyledButton,
  StyledContainerInfoUser,
} from './styles';

const Header = ({ type = 'consumer' }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const goTo = useNavigate();

  const handleLoggout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    goTo('/login');
  };

  const renderMainButton = () => {
    switch (type) {
    case 'seller':
      return (
        <StyledButton
          style={ { backgroundColor: '#2FC18C' } }
          size={ 0.15 }
          onClick={ () => goTo('/seller/orders') }
        >
          PEDIDOS
        </StyledButton>
      );
    case 'admin':
      return (
        <StyledButton
          style={ { backgroundColor: '#2FC18C' } }
          size={ 0.15 }
          onClick={ () => goTo('/admin') }
        >
          GERENCIAR USUÁRIOS
        </StyledButton>
      );
    default:
      return (
        <StyledButton
          data-testid="customer_products__element-navbar-link-products"
          style={ { backgroundColor: '#2FC18C' } }
          size={ 0.15 }
          onClick={ () => goTo('/customer/products') }
        >
          PRODUTOS
        </StyledButton>
      );
    }
  };

  return (
    <StyledContainer>
      <StyledRow>
        { renderMainButton() }
        { type === 'consumer' && (
          <StyledButton
            data-testid="customer_products__element-navbar-link-orders"
            style={ {
              backgroundColor: '#036B52',
              color: '#fff',
              textTransform: 'uppercase' } }
            size={ 0.15 }
            onClick={ () => goTo('/customer/checkout') }
          >
            MEUS PEDIDOS
          </StyledButton>
        )}
      </StyledRow>
      <StyledRow>
        <StyledContainerInfoUser size={ 0.1 }>
          <StyledText
            data-testid="customer_products__element-navbar-user-full-name"
            style={ { color: '#fff' } }
          >
            {user.name}
          </StyledText>
        </StyledContainerInfoUser>
        <StyledButton
          data-testid="customer_products__element-navbar-link-logout"
          style={ { backgroundColor: '#056CF9', color: '#fff' } }
          size={ 0.05 }
          onClick={ () => handleLoggout() }
        >
          Sair
        </StyledButton>
      </StyledRow>
    </StyledContainer>
  );
};

export default Header;

Header.propTypes = {
  type: PropTypes.string.isRequired,
};
