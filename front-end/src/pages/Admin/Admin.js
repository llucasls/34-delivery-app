import React, { useState } from 'react';

import { Header, Input, Button, Label } from '../../components';
import {
  StyledContainer,
  StyledText,
  StyledRow,
  StyledContainerRegisterForm,
} from './styles';

const Admin = () => {
  const [registerForm, setRegisterForm] = useState({
    name: { field: '', error: '' },
    email: { field: '', error: '' },
    password: { field: '', error: '' },
    role: { field: '', error: '' },
  });

  const handleInput = (event) => {
    const { title, value } = event.target;
    setRegisterForm({ ...registerForm, [title]: { field: value, error: '' } });
  };

  const renderRegisterUser = () => (
    <StyledContainerRegisterForm>
      <StyledText>Cadastrar novo usuário</StyledText>
      <StyledRow>
        <Label>
          Nome
          <Input name="name" title="name" onChange={ handleInput } />
        </Label>
        <Label>
          <Input name="email" title="name" onChange={ handleInput } />
        </Label>
        <Input name="password" title="name" onChange={ handleInput } />
        <Input name="type" title="name" onChange={ handleInput } />
        <Button title="Cadastrar" />
      </StyledRow>
    </StyledContainerRegisterForm>
  );

  return (
    <>
      <Header />
      <StyledContainer>
        {renderRegisterUser()}
      </StyledContainer>
    </>
  );
};

export default Admin;
