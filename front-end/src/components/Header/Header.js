import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        <button type="button" onClick={ () => goTo('/seller/orders') }>
          PEDIDOS
        </button>
      );
    case 'admin':
      return (
        <button type="button" onClick={ () => goTo('/admin') }>
          GERENCIAR USUÁRIOS
        </button>
      );
    default:
      return (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => goTo('/customer/products') }
        >
          PRODUTOS
        </button>
      );
    }
  };

  return (
    <nav style={ { display: 'flex', flexDirection: 'row' } }>
      <div>
        { renderMainButton() }
        {type === 'consumer' && (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => goTo('/customer/checkout') }
          >
            MEUS PEDIDOS
          </button>
        )}
      </div>
      <div>
        <span data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
        </span>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => handleLoggout() }
        >
          SAIR
        </button>
      </div>
    </nav>
  );
};

export default Header;

Header.propTypes = {
  type: PropTypes.string.isRequired,
};
