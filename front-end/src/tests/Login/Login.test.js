import React from 'react';
import Login from '../../pages/Login/Login';
import { createMemoryHistory } from 'history';

import { render, fireEvent, screen } from '../testConfig';

const INPUT_EMAIL_TEST_ID = 'input-email';
const INPUT_PASSWORD_TEST_ID = 'input-password';
const BUTTON_LOGIN_TEST_ID = 'button-login';
const BUTTON_REGISTER_TEST_ID = 'button-register';

afterEach(() => jest.clearAllMocks());

describe('Página inicial de login com os seguintes campos e características:', () => {
  it('A rota para esta página deve ser "/"', () => {
    const history = createMemoryHistory();
    history.push("/");
    expect(history.location.pathname).toBe('/');
  });

  it('A rota deve ter os input "email e senha"', () => {
    render(<Login />);

    const email = screen.getByTestId(INPUT_EMAIL_TEST_ID);
    const senha = screen.getByTestId(INPUT_PASSWORD_TEST_ID);

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
  });

  test('A rota deve ter o botão com o texto "LOGIN"', () => {
    render(<Login />);

    const button = screen.getByTestId(BUTTON_LOGIN_TEST_ID);
    expect(button).toBeInTheDocument();
  });

  test('A rota deve ter o botão com o texto "Ainda não tenho conta"', () => {
    render(<Login />);

    const button = screen.getByTestId(BUTTON_REGISTER_TEST_ID);
    expect(button).toBeInTheDocument();
  });

  test('A rota deve ser mudada para "/register" após o clique no botão, com o texto "Ainda não tenho conta"', () => {
    render(<Login />);
    const history = createMemoryHistory();
    const button = screen.getByTestId(BUTTON_REGISTER_TEST_ID);

    fireEvent.click(button);
    history.push("/register");

    expect(history.location.pathname).toBe('/register');
  });
});
