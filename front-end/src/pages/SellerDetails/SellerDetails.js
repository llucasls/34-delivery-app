import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../service/api';
import colorStatusOrder from '../../helpers/colorStatusOrder';
import formatedCurrencyBRL from '../../helpers/formatedCurrencyBRL';
import formatedId from '../../helpers/formatedId';
import formatedData from '../../helpers/formatedData';

import { Header, Board, Button } from '../../components';
import { StyledContainer, StyledText, StyledRow, StyledColumn } from './styles';

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

  const renderHeaderBoard = () => (
    <StyledRow>
      <StyledColumn style={ { width: '19%', justifyContent: 'center' } }>
        <StyledText upper>{`Pedido ${formatedId(order.id)}`}</StyledText>
      </StyledColumn>
      <StyledColumn
        style={ {
          width: '19%',
          height: 40,
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 5 } }
      >
        <StyledText>{ formatedData(order.saleDate) }</StyledText>
      </StyledColumn>

      <StyledColumn
        style={ {
          width: '19%',
          height: 40,
          justifyContent: 'center',
          backgroundColor: colorStatusOrder(order.status),
          borderRadius: 5,
        } }
      >
        <StyledText>{order.status}</StyledText>
      </StyledColumn>
      <Button
        style={ {
          width: '19%',
          height: 40,
          backgroundColor: '#2FC18C',
          margin: 0,
          marginLeft: '5%',
        } }
        title="PREPARAR PEDIDO"
        onPress={ () => null }
      />
      <Button
        style={ {
          width: '19%',
          height: 40,
          backgroundColor: '#421981',
          margin: 0,
          marginLeft: '5%',
        } }
        title="SAIU PARA ENTREGA"
        onPress={ () => null }
      />
    </StyledRow>
  );

  useEffect(() => {
    getOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <StyledContainer>
        { !order
          ? <StyledText>Carregando...</StyledText>
          : (
            <Board
              title="Lista de usuários"
              boardHeader={ renderHeaderBoard() }
              boardColoumns={ [
                'Item',
                'Descrição',
                'Quantidade',
                'Valor unitario',
                'Sub-total'] }
              board={ order.products.map((product, index) => {
                const { name, price, SalesProducts } = product;

                return {
                  item: index + 1,
                  descrição: name,
                  Quantidade: SalesProducts.quantity,
                  price: formatedCurrencyBRL(price),
                  total:
                    formatedCurrencyBRL(Number(price) * Number(SalesProducts.quantity)),
                };
              }) }
            />)}
      </StyledContainer>
    </>
  );
};

export default SellerDetails;
