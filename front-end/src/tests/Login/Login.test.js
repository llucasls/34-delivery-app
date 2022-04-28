import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../../App';

import { renderWithRouterAndStore } from '../testConfig';

const INPUT_EMAIL_TEST_ID = 'input-email';
const INPUT_PASSWORD_TEST_ID = 'input-password';
const BUTTON_TEST_LOGIN = 'button-login';
const BUTTON_TEST_REGISTER = 'button-register';

// afterEach(() => jest.clearAllMocks());

describe('1) Página inicial de login com os seguintes campos e características:', () => {
  it('A rota para esta página deve ser inicialmente "/"', () => {
    const { history } = renderWithRouterAndStore(<App />, '/');
    expect(history.location.pathname).toBe('/');
  });

  it('A rota deve ter os input "email e senha"', () => {
    renderWithRouterAndStore(<App />, '/');
    const email = screen.getByTestId(INPUT_EMAIL_TEST_ID);
    const senha = screen.getByTestId(INPUT_PASSWORD_TEST_ID);

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
  });

  it('A rota deve ter o botão com o texto "LOGIN"', () => {
    renderWithRouterAndStore(<App />, '/');

    const button = screen.getByTestId(BUTTON_TEST_LOGIN);
    expect(button).toBeInTheDocument();
  });

  it('A rota deve ter o botão com o texto "Ainda não tenho conta"', () => {
    renderWithRouterAndStore(<App />, '/');

    const button = screen.getByTestId(BUTTON_TEST_REGISTER);
    expect(button).toBeInTheDocument();
  });

  it('A rota deve ser mudada para "/cadastro" após o clique no botão, com o texto "Ainda não tenho conta"', () => {
    const { history } = renderWithRouterAndStore(<App />, '/');

    const button = screen.getByTestId(BUTTON_TEST_REGISTER);

    fireEvent.click(button);

    expect(history.location.pathname).toBe('/cadastro');
  });
});
