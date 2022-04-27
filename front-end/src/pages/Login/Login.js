import React from 'react';
import { Form } from '@unform/web';
import { useNavigate } from 'react-router-dom';

import { Input, Button, Label } from '../../components';
import { StyledContainer, StyledContainerForm } from './styles';

const Login = () => {
  const goTo = useNavigate();

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      <StyledContainerForm>
        <Form
          style={ {
            display: 'flex',
            flexDirection: 'column' } }
          onSubmit={ handleSubmit }
        >
          <Label size={ 13 }>
            Login
            <Input
              data-testid="input-email"
              name="email"
              placeholder="email"
            />
          </Label>
          <Label size={ 13 }>
            Senha
            <Input
              data-testid="input-password"
              name="password"
              type="password"
              placeholder="senha"
            />
          </Label>

          <Button data-testid="button-login" type="submit" title="LOGIN" size={ 12 } />

        </Form>
        <Button
          style={ { marginBottom: 0, backgroundColor: 'transparent', color: '#036B52' } }
          type="button"
          data-testid="button-register"
          onClick={ () => goTo('/cadastro') }
          title="Ainda não tenho conta"
          size={ 12 }
        />

      </StyledContainerForm>
    </StyledContainer>

  );
};

export default Login;
