import React, { useEffect, useMemo, useState } from 'react';
import { Header } from '../../components';
import currencyBrl from '../../helpers/currencyBrl';

import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledContainerBoard,
  StyledHeaderBoard,
  StyledContainerTable,
  StyledContainerTableHeader,
  StyledContainerTableRow,
  StyledContainerTableColumn,
  StyledColumn,
} from './styles';

const ProductsCheckout = () => {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('cart'));
    setData(products);
  }, []);

  useEffect(() => {
    const result = data
      .reduce((acc, curr) => acc + Number(curr.price) * curr.amount, 0);
    setTotal(result);
  }, [data]);

  const renderTable = () => (
    <StyledContainerTable>
      <StyledContainerTableHeader>
        <StyledContainerTableColumn style={ { width: '5%' } }>
          Item
        </StyledContainerTableColumn>
        <StyledContainerTableColumn style={ { width: '50%' } }>
          Descrição
        </StyledContainerTableColumn>
        <StyledContainerTableColumn style={ { width: '10%' } }>
          Quantidade
        </StyledContainerTableColumn>
        <StyledContainerTableColumn style={ { width: '10%' } }>
          Valor únitario
        </StyledContainerTableColumn>
        <StyledContainerTableColumn style={ { width: '10%' } }>
          Sub-total
        </StyledContainerTableColumn>
        <StyledContainerTableColumn style={ { width: '15%' } }>
          Remover-item
        </StyledContainerTableColumn>
      </StyledContainerTableHeader>
      {data.map((item, index) => (
        <StyledContainerTableRow key={ index }>
          <StyledContainerTableColumn
            style={ {
              backgroundColor: '#2FC18C',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5 } }
          >
            {item.id}
          </StyledContainerTableColumn>
          <StyledContainerTableColumn
            style={ {
              textAlign: 'left', backgroundColor: '#EAF1EF' } }
          >
            {item.name}
          </StyledContainerTableColumn>
          <StyledContainerTableColumn
            style={ {
              backgroundColor: '#036B52',
              color: '#FFF' } }
          >
            {item.quantity}
          </StyledContainerTableColumn>
          <StyledContainerTableColumn
            style={ {
              backgroundColor: '#421981', color: '#FFF' } }
          >
            {currencyBrl(`${item.price}`)}
          </StyledContainerTableColumn>
          <StyledContainerTableColumn
            style={ { backgroundColor: '#056CF9',
              color: '#FFF' } }
          >
            {currencyBrl(total)}
          </StyledContainerTableColumn>
          <StyledContainerTableColumn
            style={ {
              backgroundColor: '#2FC18C',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              color: '#FFF' } }
          >
            Remover
          </StyledContainerTableColumn>
        </StyledContainerTableRow>
      ))}
    </StyledContainerTable>
  );

  const returnTotal = () => (
    <StyledColumn
      style={ {
        position: 'absolute',
        bottom: '35%',
        right: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#036B52',
        height: 60,
        width: 200,
        borderRadius: 5 } }
    >
      <StyledText style={ { color: '#FFF' } }>
        {`TOTAL: ${currencyBrl(`${total}`)} `}
      </StyledText>
    </StyledColumn>
  );

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledTitle>Finalizar Pedido</StyledTitle>
        <StyledContainerBoard>
          <StyledHeaderBoard>
            {useMemo(renderTable, [data])}
            {useMemo(returnTotal, [total])}
          </StyledHeaderBoard>
        </StyledContainerBoard>
      </StyledContainer>
    </>
  );
};

export default ProductsCheckout;
