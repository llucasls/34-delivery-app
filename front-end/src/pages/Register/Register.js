import React from 'react';
import { Form } from '@unform/web';
import { Input, Button, Label } from '../../components';

import { StyledContainer, StyledText, StyledContainerForm } from './styles';

const Register = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <StyledContainer>
      <StyledContainerForm>
        <StyledText>
          Cadastro
        </StyledText>
        <Form
          style={ {
            display: 'flex',
            flexDirection: 'column' } }
          onSubmit={ handleSubmit }
        >
          <Label size={ 18 }>
            Nome
            <Input
              style={ { width: 300, height: 40 } }
              data-testid="input-name"
              name="name"
              placeholder="Seu nome"
            />
          </Label>
          <Label size={ 18 }>
            Email
            <Input
              data-testid="input-email"
              style={ { width: 300, height: 40 } }
              name="email"
              placeholder="seuemail@email.com"
            />
          </Label>
          <Label size={ 18 }>
            Senha
            <Input
              data-testid="input-password"
              style={ { width: 300, height: 40 } }
              name="password"
              type="password"
              placeholder="***********"
            />
          </Label>
          <Button
            data-testid="button-register"
            type="submit"
            title="CADASTRAR"
            size={ 20 }
          />
        </Form>
      </StyledContainerForm>
    </StyledContainer>
  );
};

export default Register;
