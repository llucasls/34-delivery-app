import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { useNavigate } from 'react-router-dom';
import { api } from '../../service/api';
import loginSchema from '../../schemas/login';

import { Input, Button, Label } from '../../components';
import { StyledContainer, StyledContainerForm, StyledText } from './styles';

const Login = () => {
  const formRef = useRef(null);
  const goTo = useNavigate();
  const [axiosError, setAxiosError] = useState(null);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [dsb, setDsb] = useState(true);

  const handleChange = (event) => {
    const { title, value } = event.target;

    setLogin({ ...login, [title]: value });
  };

  const handleNavigate = (role) => {
    switch (role) {
    case 'seller':
      goTo('/seller/orders');
      break;
    case 'admin':
      goTo('/');
      break;
    default:
      goTo('/customer/products');
      break;
    }
  };

  const handleLogin = async (dataForm) => {
    try {
      const { data } = await api.post('/login', dataForm);

      localStorage.clear();
      // salva o token no localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({
        name: data.name,
        email: data.email,
        role: data.role,
        token: data.token,
      }));

      handleNavigate(data.role);
    } catch (error) {
      setAxiosError(error.response.data.error);
    }
  };

  const handleSubmit = async (dataForm) => {
    await handleLogin(dataForm);
  };

  const validate = useCallback(async () => {
    const errorMessages = {};
    try {
      await loginSchema.validate(login, { abortEarly: false });
      formRef.current.setErrors(errorMessages);
      setDsb(false);
      return;
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          errorMessages[err.path] = err.message;
        });
      }
      setDsb(true);
    }
  }, [login]);

  useEffect(() => {
    validate();
  });

  useEffect(() => {
    const FIVE_THOUSAND_MILLISECONDS = 5000;

    if (axiosError) {
      setTimeout(() => {
        setAxiosError(null);
      }, FIVE_THOUSAND_MILLISECONDS);
    }
  }, [axiosError]);

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
          {
            axiosError && (
              <StyledText
                data-testid="common_login__element-invalid-email"
                style={ { color: 'red' } }
              >
                {axiosError}
              </StyledText>
            )
          }
          <Label size={ 18 }>
            <StyledText style={ { marginLeft: 5 } } size={ 12 }>Email</StyledText>
            <Input
              data-testid="common_login__input-email"
              style={ { width: 300, height: 40 } }
              name="email"
              title="email"
              placeholder="email"
              onChange={ handleChange }
            />
          </Label>
          <Label size={ 18 }>
            <StyledText style={ { marginLeft: 5 } } size={ 12 }>Senha</StyledText>
            <Input
              data-testid="common_login__input-password"
              style={ { width: 300, height: 40 } }
              name="password"
              type="password"
              placeholder="senha"
              title="password"
              onChange={ handleChange }
            />
          </Label>

          <Button
            data-testid="common_login__button-login"
            type="submit"
            title="LOGIN"
            size={ 20 }
            disabled={ dsb }
          />

        </Form>
        <Button
          style={ {
            marginBottom: 0,
            backgroundColor: 'transparent',
            color: '#036B52',
            border: '1px solid #036B52',
          } }
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => goTo('/register') }
          title="Ainda não tenho conta"
          size={ 20 }
        />

      </StyledContainerForm>
    </StyledContainer>

  );
};

export default Login;
