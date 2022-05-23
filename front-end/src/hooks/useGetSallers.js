import React from 'react';
import { api } from '../service/api';

const useGetSallers = () => {
  const [saller, setSaller] = React.useState(null);

  const getSallers = async () => {
    try {
      const { data } = await api.get('/users/sellers');
      setSaller(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getSallers();
  }, []);

  return saller;
};

export default useGetSallers;
