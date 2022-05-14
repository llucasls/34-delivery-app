import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../service/api';

import { Input, Button, Label } from '../../components';
import { StyledContainer, StyledContainerForm, StyledText } from './styles';

const Login = () => {
  const [axiosError, setAxiosError] = useState(null);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const goTo = useNavigate();

  const handleChange = (event) => {
    const { title, value } = event.target;
    setLogin({ ...login, [title]: value });
  };

  const handleNavigate = (role) => {
    switch (role) {
    case 'seller':
      goTo('/seller/orders');
      break;
    case 'administrator':
      goTo('/admin');
      break;
    default:
      goTo('/customer/products');
      break;
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await api.post('/login', login);

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

  const emailRegex = /\S+@\S+\.\S+/;
  const validationPass = 6;
  const dsb = !(emailRegex
    .test(login.email) && login.password.length >= validationPass);

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
          onClick={ async () => {
            await handleLogin();
          } }
          disabled={ dsb }
        />
        <Button
          style={ {
            marginBottom: 0,
            backgroundColor: 'transparent',
            color: '#036B52',
            border: '1px solid #036B52',
          } }
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => {
            goTo('/register');
          } }
          title="Ainda não tenho conta"
          size={ 20 }
        />

      </StyledContainerForm>
    </StyledContainer>

  );
};

export default Login;
