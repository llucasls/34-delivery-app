import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../../App';

import renderWithRouterAndRedux from '../testConfig';

const INPUT_NAME_TEST_ID = 'input-name'
const INPUT_EMAIL_TEST_ID = 'input-email';
const INPUT_PASSWORD_TEST_ID = 'input-password';
const BUTTON_REGISTER_TEST_ID = 'button-register';

describe('Página Register contém os seguintes campos e características:', () => {
  it('A rota para esta página deve ser "/register"', () => {
    const { history } = renderWithRouterAndRedux(<App />, '/register');
    expect(history.location.pathname).toBe('/register');
  });

  it('A rota deve ter os input "Nome, Email e Senha"', () => {
    renderWithRouterAndRedux(<App />, '/register');
    const name = screen.getByTestId(INPUT_NAME_TEST_ID);
    const email = screen.getByTestId(INPUT_EMAIL_TEST_ID);
    const password = screen.getByTestId(INPUT_PASSWORD_TEST_ID);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('A rota deve ter o botão com o texto "CADASTRAR"', () => {
    renderWithRouterAndRedux(<App />, '/register');

    const button = screen.getByTestId(BUTTON_REGISTER_TEST_ID);
    expect(button).toBeInTheDocument();
  });
});
