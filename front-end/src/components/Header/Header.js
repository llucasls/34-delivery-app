import React from 'react';
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

  return (
    <StyledContainer>
      <StyledRow>
        <StyledButton
          style={ {
            backgroundColor: '#2FC18C',
          } }
          size={ 0.1 }
        >
          Produtos
        </StyledButton>
        { consumer && (
          <StyledButton
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
          <StyledText style={ { color: '#fff' } }>
            {user.name}
          </StyledText>
        </StyledContainerInfoUser>
        <StyledButton
          style={ { backgroundColor: '#056CF9', color: '#fff' } }
          size={ 0.05 }
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
