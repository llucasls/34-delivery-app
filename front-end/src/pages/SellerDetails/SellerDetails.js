import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../service/api';

import { Header, BoardOrder } from '../../components';
import { StyledContainer, StyledText } from './styles';

const SellerDetails = () => {
  const [order, setOrder] = useState(null);
  const location = useLocation();

  const getOrder = async () => {
    try {
      const idOrder = location.pathname.split('/')[3];
      // route "/sales/id" not working
      const { data } = await api.get('/sales');
      setOrder(data.find((item) => `${item.id}` === idOrder));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <StyledContainer>
        {console.log(order)}
        { !order
          ? <StyledText>Carregando...</StyledText>
          : <BoardOrder data={ order } title="Detalhe do Pedido" />}
      </StyledContainer>
    </>
  );
};

export default SellerDetails;
