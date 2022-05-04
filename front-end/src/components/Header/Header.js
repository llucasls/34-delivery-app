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

const Header = ({ consumer = true }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const goTo = useNavigate();

  const handleLoggout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    goTo('/login');
  };

  return (
    <StyledContainer>
      <StyledRow>
        <StyledButton
          data-testid="customer_products__element-navbar-link-products"
          style={ {
            backgroundColor: '#2FC18C',
          } }
          size={ 0.1 }
        >
          Produtos
        </StyledButton>
        { consumer && (
          <StyledButton
            data-testid="customer_products__element-navbar-link-orders"
            style={ {
              backgroundColor: '#036B52',
            } }
            size={ 0.1 }
          >
            Meus Produtos
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
  consumer: PropTypes.bool.isRequired,
};
