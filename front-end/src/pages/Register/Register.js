import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { useAppDispatch } from '../../store';
import { api } from '../../service/api';
import { SET_USER } from '../../store/slices/user';
import { Input, Button, Label } from '../../components';

import { StyledContainer, StyledTitle, StyledContainerForm, StyledText } from './styles';
import schemaRegister from '../../schemas/register.user';

const Register = () => {
  const formRef = useRef(null);
  const dispatch = useAppDispatch();
  // const user = useAppSelector((state) => state.userReducer.user);

  const handleLogin = async (dataForm) => {
    try {
      const { data } = await api.post('/register', dataForm);

      dispatch(SET_USER(data.user));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (dataForm) => {
    try {
      await schemaRegister.validate(dataForm, { abortEarly: false });
      formRef.current.setErrors({});

      await handleLogin(dataForm);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach((err) => {
          errorMessages[err.path] = err.message;
        });

        console.log(errorMessages);

        formRef.current.setErrors(errorMessages);
      }
    }
  };

  return (
    <StyledContainer>
      <StyledContainerForm>
        <StyledTitle>
          Cadastro
        </StyledTitle>
        <Form
          ref={ formRef }
          style={ {
            display: 'flex',
            flexDirection: 'column' } }
          onSubmit={ handleSubmit }
        >
          <Label size={ 18 }>
            <StyledText>
              Nome
            </StyledText>
            <Input
              style={ { width: 300, height: 40 } }
              data-testid="input-name"
              name="name"
              placeholder="Seu nome"
            />
          </Label>
          <Label size={ 18 }>
            <StyledText>
              Email
            </StyledText>
            <Input
              data-testid="input-email"
              style={ { width: 300, height: 40 } }
              name="email"
              placeholder="seuemail@email.com"
            />
          </Label>
          <Label size={ 18 }>
            <StyledText>
              Senha
            </StyledText>
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
            className="button"
            size={ 20 }
          />
        </Form>
      </StyledContainerForm>
    </StyledContainer>
  );
};

export default Register;
