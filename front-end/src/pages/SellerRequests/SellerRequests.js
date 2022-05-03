import React, { useEffect, useState } from 'react';

import CardRequests from './CardRequests/CardRequests';
import { Header } from '../../components';
import { StyledContainer, StyledText } from './styles';
import { api } from '../../service/api';

const SellerRequest = () => {
  const [requests, setRequests] = useState([]);

  const getRequests = async () => {
    try {
      const { data } = await api.get('/sales');

      setRequests(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <StyledContainer>
      <Header />
      {!requests.length ? (
        <StyledText>Carregando...</StyledText>
      ) : requests.map((request, index) => (
        <CardRequests key={ index } data={ request } />
      )) }
    </StyledContainer>
  );
};

export default SellerRequest;
