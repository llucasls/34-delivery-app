import React, { useEffect, useState } from 'react';
import { api } from '../../service/api';

import { Header } from '../../components';

const Admin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [users, setUsers] = useState([]);
  const TWELVE = 12;
  const SIX = 6;
  const dsb = !(
    (/\S+@\S+\.\S+/).test(email)
    && password.length >= SIX
    && name.length >= TWELVE
    && role !== '');

  const getUsers = async () => {
    try {
      const { data } = await api.get('/users');

      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const register = async () => {
    console.log(role);

    try {
      await api.post('/register', {
        name,
        email,
        password,
        role,
      });

      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (emaildelete) => {
    try {
      await api.delete(`/users/${emaildelete}`);

      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderRegisterUser = () => (
    <form>
      <label htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nome e sobrenome"
          onChange={ ({ target }) => setName(target.value) }
          data-testid="admin_manage__input-name"
        />
      </label>
      <label htmlFor="email">
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={ ({ target }) => setEmail(target.value) }
          data-testid="admin_manage__input-email"
        />
      </label>
      <label htmlFor="password">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          onChange={ ({ target }) => setPassword(target.value) }
          data-testid="admin_manage__input-password"
        />
      </label>
      <label htmlFor="role">
        <select
          id="role"
          name="role"
          onChange={ ({ target }) => setRole(target.value) }
          data-testid="admin_manage__select-role"
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
        </select>
      </label>
      <button
        type="button"
        disabled={ dsb }
        onClick={ register }
        data-testid="admin_manage__button-register"
      >
        Cadastrar
      </button>
    </form>
  );

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={ index }>
            <td
              data-testid={ `admin_manage__element-user-table-item-number-${index}` }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-name-${index}` }
            >
              {user.name}
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-email-${index}` }
            >
              {user.email}
            </td>
            <td
              data-testid={ `admin_manage__element-user-table-role-${index}` }
            >
              {user.role}
            </td>
            <td>
              <button
                type="button"
                onClick={ () => deleteUser(user.email) }
                data-testid={ `admin_manage__element-user-table-remove-${index}` }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <Header type="admin" />
      <div>
        <h2>Cadastrar novo usuário</h2>
        {renderRegisterUser()}
        {renderTable()}
      </div>
    </>
  );
};

export default Admin;
