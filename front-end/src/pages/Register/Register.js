import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const [axiosError, setAxiosError] = useState(null);
  const [sucess, setSucess] = useState('');
  const [dsb, setDsb] = useState(true);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { title, value } = event.target;

    setRegister({ ...register, [title]: value });
  };

  const handleRegister = async (dataForm) => {
    try {
      const { data } = await api.post('/register', dataForm);

      dispatch(SET_USER({
        name: data.name,
        email: data.email,
        role: data.role,
      }));

      setSucess('Cadastro realizado com sucesso!');
    } catch (error) {
      setAxiosError(error.response.data.error);
    }
  };

  const handleSubmit = async (dataForm) => {
    await handleRegister(dataForm);
  };

  const validate = useCallback(async () => {
    try {
      await schemaRegister.validate(register, { abortEarly: false });
      return setDsb(false);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach((err) => {
          errorMessages[err.path] = err.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
    return setDsb(true);
  }, [register]);

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
              data-testid="common_register__input-name"
              name="name"
              title="name"
              placeholder="Seu nome"
              onChange={ handleChange }
            />
          </Label>
          <Label size={ 18 }>
            <StyledText>
              Email
            </StyledText>
            <Input
              data-testid="common_register__input-email"
              style={ { width: 300, height: 40 } }
              name="email"
              title="email"
              placeholder="seuemail@email.com"
              onChange={ handleChange }
            />
          </Label>
          <Label size={ 18 }>
            <StyledText>
              Senha
            </StyledText>
            <Input
              data-testid="common_register__input-password"
              style={ { width: 300, height: 40 } }
              name="password"
              type="password"
              title="password"
              placeholder="***********"
              onChange={ handleChange }
            />
          </Label>
          <Button
            data-testid="common_register__button-register"
            type="submit"
            title="CADASTRAR"
            className="button"
            size={ 20 }
            disabled={ dsb }
          />
          {
            axiosError ? (
              <StyledText
                data-testid="common_register__element-invalid_register"
                style={ { color: 'red' } }
              >
                { axiosError }
              </StyledText>
            ) : (
              <StyledText
                data-testid="common_register__element-valid_register"
                style={ { color: 'green' } }
              >
                { sucess }
              </StyledText>
            )
          }

        </Form>
      </StyledContainerForm>
    </StyledContainer>
  );
};

export default Register;
