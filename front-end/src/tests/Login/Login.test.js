import React from 'react';
import Login from '../../pages/Login/Login';


import { render, fireEvent, screen } from '../testConfig';

const INPUT_EMAIL_TEST_ID = 'input-email';
const INPUT_PASSWORD_TEST_ID = 'input-password';
const BUTTON_LOGIN_TEST_ID = 'button-login';
const BUTTON_REGISTER_TEST_ID = 'button-register';

// afterEach(() => jest.clearAllMocks());

describe.only('1) Página inicial de login com os seguintes campos e características:', () => {
  test('test aqui', () => {
    const { store } = render(<Login />, '/');

    expect(true).toBe(true);
  })

  test('A rota para esta página deve ser inicialmente "/"', () => {
    const { history } = render(<App />, '/');
    expect(history.location.pathname).toBe('/');
  });

  test('A rota deve ter os input "email e senha"', () => {
    render(<Login />);

    const email = screen.getByTestId(INPUT_EMAIL_TEST_ID);
    const senha = screen.getByTestId(INPUT_PASSWORD_TEST_ID);

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
  });

  // test('A rota deve ter o botão com o texto "LOGIN"', () => {
  //   render(<App />, '/');

  //   const button = screen.getByTestId(BUTTON_LOGIN_TEST_ID);
  //   expect(button).toBeInTheDocument();
  // });

  // test('A rota deve ter o botão com o texto "Ainda não tenho conta"', () => {
  //   render(<App />, '/');

  //   const button = screen.getByTestId(BUTTON_REGISTER_TEST_ID);
  //   expect(button).toBeInTheDocument();
  // });

  // test('A rota deve ser mudada para "/cadastro" após o clique no botão, com o texto "Ainda não tenho conta"', () => {
  //   const { history } = render(<App />, '/');

  //   const button = screen.getByTestId(BUTTON_REGISTER_TEST_ID);

  //   fireEvent.click(button);

  //   expect(history.location.pathname).toBe('/cadastro');
  // });
});
