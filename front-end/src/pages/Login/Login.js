import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { api } from '../../service/api';
import { SET_USER } from '../../store/slices/user';
import loginSchema from '../../schemas/login';

import { Input, Button, Label } from '../../components';
import { StyledContainer, StyledContainerForm, StyledText } from './styles';

const Login = () => {
  const formRef = useRef(null);
  const goTo = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = async (dataForm) => {
    try {
      // console.log(dataForm);
      // requesição de login

      const { data } = await api.post('/login', dataForm);
      // salva o token jwt no localStorage

      console.log(data);
      // localStorage.setItem('@token', data.token);

      // salva info do usuario na store do redux
      // dispatch(SET_USER(data.user));

      // navega até a home pagina
      // goTo('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (dataForm) => {
    try {
      await loginSchema.validate(dataForm, { abortEarly: false });
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
        <Form
          ref={ formRef }
          style={ {
            display: 'flex',
            flexDirection: 'column' } }
          onSubmit={ handleSubmit }
        >
          <Label size={ 13 }>
            <StyledText style={ { marginLeft: 5 } } size={ 12 }>Email</StyledText>
            <Input
              data-testid="input-email"
              name="email"
              placeholder="email"
            />
          </Label>
          <Label size={ 13 }>
            <StyledText style={ { marginLeft: 5 } } size={ 12 }>Senha</StyledText>
            <Input
              data-testid="input-password"
              name="password"
              type="password"
              placeholder="senha"
            />
          </Label>

          <Button data-testid="button-login" type="submit" title="LOGIN" size={ 14 } />

        </Form>
        <Button
          style={ {
            marginBottom: 0,
            backgroundColor: 'transparent',
            color: '#036B52',
            border: '1px solid #036B52',
          } }
          type="button"
          data-testid="button-register"
          onClick={ () => goTo('/register') }
          title="Ainda não tenho conta"
          size={ 14 }
        />

      </StyledContainerForm>
    </StyledContainer>

  );
};

export default Login;
