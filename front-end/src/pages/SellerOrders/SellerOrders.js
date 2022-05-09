import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../service/api';

import { Header, CardOrder } from '../../components';
import {
  StyledContainer,
  StyledText,
  StyledContainerOrders,
  StyledBaseButton,
} from './styles';

const SellerRequest = () => {
  const [orders, setOrders] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/seller/orders/${id}`);
  };

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
      orders.map((order, index) => (
        <StyledBaseButton key={ index } onClick={ () => handleNavigate(order.id) }>
          <CardOrder data={ order } />
        </StyledBaseButton>
      ))
    );
  };

  return (
    <>
      <Header type="seller" />
      <StyledContainer>
        { !orders
          ? <StyledText>Carregando...</StyledText>
          : (
            <StyledContainerOrders>
              {renderOrders()}
            </StyledContainerOrders>
          )}
      </StyledContainer>
    </>
  );
};

export default SellerRequest;
