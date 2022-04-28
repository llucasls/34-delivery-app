import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleClick = () => { /* Aqui vem a implementação da API do axios */ };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="login">
            Login
            <input
              data-testid="input-email"
              type="text"
              id="login"
              name="login"
              onChange={ handleChange }
              placeholder="Seu e-mail"
            />
          </label>
          <label htmlFor="login">
            Senha
            <input
              data-testid="input-password"
              type="password"
              id="senha"
              name="senha"
              onChange={ handleChange }
              placeholder="Sua senha"
            />
          </label>
        </div>
        <button
          data-testid="button-login"
          type="submit"
          onClick={ dispatch(handleClick) }
        >
          Login
        </button>
        <Link
          data-testid="button-register"
          to="/cadastro"
        >
          Ainda não tenho conta
        </Link>
      </form>
    </div>
  );
};

export default Login;
