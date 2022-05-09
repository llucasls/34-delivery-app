import React, { useState } from 'react';
import useGetUsers from '../../hooks/useGetUsers';

import { Header, Input, Select, Button, Label, Board } from '../../components';
import {
  StyledContainer,
  StyledText,
  StyledRow,
  StyledContainerRegisterForm,
} from './styles';

const Admin = () => {
  const allUsers = useGetUsers();
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
      <StyledRow>
        <Label style={ { width: '100%' } }>
          Nome
          <Input
            name="name"
            title="name"
            placeholder="Nome e Sobrenome"
            onChange={ handleInput }
          />
        </Label>
        <Label style={ { width: '100%' } }>
          Email
          <Input
            name="email"
            title="name"
            placeholder="seu-email@site.com.br"
            onChange={ handleInput }
          />
        </Label>
        <Label style={ { width: '100%' } }>
          Senha
          <Input
            name="password"
            title="name"
            placeholder="Senha"
            onChange={ handleInput }
          />
        </Label>
        <Label style={ { width: '100%' } }>
          Tipo
          <Select
            name="role"
            title="role"
            options={ ['Consumidor', 'Vendedor'] }
            onChange={ handleInput }
          />
        </Label>
        <Button
          style={ {
            padding: 10, width: '10%', margin: 0, marginBottom: -10 } }
          title="Cadastrar"
        />
      </StyledRow>
    </StyledContainerRegisterForm>
  );

  return (
    <>
      <Header type="admin" />
      <StyledContainer>
        <StyledText
          style={ { alignSelf: 'flex-start', marginLeft: '10%', marginBottom: 20 } }
        >
          Cadastrar novo usuário
        </StyledText>
        {renderRegisterUser()}
        <Board
          boardColoumns={ ['Item', 'Nome', 'Email', 'Tipo', 'Excluir'] }
          board={ allUsers
            .map((item, index) => {
              const { name, email, role } = item;

              return {
                item: index,
                nome: name,
                email,
                tipo: role,
                excluir: 'excluir',
              };
            }) }
          title="Lista de usuários"
        />
      </StyledContainer>
    </>
  );
};

export default Admin;
