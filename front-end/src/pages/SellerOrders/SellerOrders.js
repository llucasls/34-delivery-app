import React, { useEffect, useState } from 'react';
import { api } from '../../service/api';

import { Header, CardOrder } from '../../components';
import { StyledContainer, StyledText, StyledContainerOrders } from './styles';

const SellerRequest = () => {
  const [orders, setOrders] = useState(null);

  const getOrder = async () => {
    try {
      const { data } = await api.get('/sales');

      setOrders(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const renderOrders = () => {
    if (!orders.length) {
      return (
        <StyledText>Ainda não foi gerado nenhum pedido</StyledText>
      );
    }

    return (
      orders.map((order, index) => <CardOrder key={ index } data={ order } />)
    );
  };

  return (
    <StyledContainer>
      <Header />
      { !orders
        ? <StyledText>Carregando...</StyledText>
        : (
          <StyledContainerOrders>
            {renderOrders()}
          </StyledContainerOrders>
        )}
    </StyledContainer>
  );
};

export default SellerRequest;
