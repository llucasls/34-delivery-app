import React from 'react';
import { createMemoryHistory } from 'history';
import { fireEvent, screen } from '@testing-library/react';

import { render } from '../testConfig';
import Register from '../../pages/Register/Register';
import { act } from 'react-dom/test-utils';

const INPUT_NAME_TEST_ID = 'common_register__input-name'
const INPUT_EMAIL_TEST_ID = 'common_register__input-email';
const INPUT_PASSWORD_TEST_ID = 'common_register__input-password';
const BUTTON_REGISTER_TEST_ID = 'common_register__button-register';
const TEXT_SUCESS_TEST_ID = 'common_register__element-valid_register';


describe('Testa Página Register', () => {
  it('A rota para esta página deve ser "/register"', () => {
    const history = createMemoryHistory();
    history.push("/register");
    expect(history.location.pathname).toBe('/register');
  });

  it('Deve ter os input "Nome, Email e Senha"', () => {
    render(<Register />);
    const name = screen.getByTestId(INPUT_NAME_TEST_ID);
    const email = screen.getByTestId(INPUT_EMAIL_TEST_ID);
    const password = screen.getByTestId(INPUT_PASSWORD_TEST_ID);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('Deve ter o botão com o texto "CADASTRAR"', () => {
    render(<Register />);

    const button = screen.getByTestId(BUTTON_REGISTER_TEST_ID);
    expect(button).toBeInTheDocument();
  });

  describe.only('Testa implementações do register', () => {
    let expectName ,expectedEmail, expectedPassword;
    expectName = 'Rodolfo de Freitas do Santos'
    expectedEmail = 'validemail@hotmail.com';
    expectedPassword = '1234567812345678';

    it('Testa se é possivel registrar com sucesso', async () => {
        render(<Register />);
      const name = screen.getByTestId(INPUT_NAME_TEST_ID);
      const email = screen.getByTestId(INPUT_EMAIL_TEST_ID);
      const password = screen.getByTestId(INPUT_PASSWORD_TEST_ID);
      const button = screen.getByTestId(BUTTON_REGISTER_TEST_ID);

      await act(async ()=> {

        expect(button).toHaveProperty('disabled', true);
        fireEvent.change(name, {target: {value: expectName}});
        fireEvent.change(email, {target: {value: expectedEmail}});
        fireEvent.change(password, {target: {value: expectedPassword}});
      })

      expect(button).toHaveProperty('disabled', false);
    });
  });
})
