import React, { useEffect, useRef, useState } from 'react';
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
  const [axiosError, setAxiosError] = useState(null);

  const handleLogin = async (dataForm) => {
    try {
      // console.log(dataForm);
      // requesição de login

      const { data } = await api.post('/login', dataForm);
      // salva o token jwt no localStorage

      localStorage.setItem('@token', data.token);

      // salva info do usuario na store do redux
      dispatch(SET_USER({ email: data.email, role: data.role }));

      // navega até a home pagina
      // goTo('/');
    } catch (error) {
      setAxiosError(error.response.data.error);
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
              data-testid="input-email"
              style={ { width: 300, height: 40 } }
              name="email"
              placeholder="email"
            />
          </Label>
          <Label size={ 18 }>
            <StyledText style={ { marginLeft: 5 } } size={ 12 }>Senha</StyledText>
            <Input
              data-testid="input-password"
              style={ { width: 300, height: 40 } }
              name="password"
              type="password"
              placeholder="senha"
            />
          </Label>

          <Button
            data-testid="button-login"
            type="submit"
            title="LOGIN"
            size={ 20 }
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
          data-testid="button-register"
          onClick={ () => goTo('/register') }
          title="Ainda não tenho conta"
          size={ 20 }
        />

      </StyledContainerForm>
    </StyledContainer>

  );
};

export default Login;
