import React from 'react';
import { api } from '../service/api';

const useGetUsers = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    try {
      const { data } = await api.get('/users');

      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return users;
};

export default useGetUsers;
