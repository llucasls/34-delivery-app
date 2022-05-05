import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import idWithFourDigits from '../../helpers/idWithFourDigits';
import colorStatusOrder from '../../helpers/colorStatusOrder';
import getDateFormated from '../../helpers/getDataFormated';

import Button from '../Form/Button/Button';
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
  StyledRow,
} from './styles';
import formatedCurrencyBRL from '../../helpers/formatedCurrencyBRL';

const BoardOrder = ({ data }) => {
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    const result = data.products
      .reduce((acc, curr) => acc + Number(curr.price) * curr.SalesProducts.quantity, 0);

    setTotal(result);
  };

  useEffect(() => {
    getTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderTable = () => (
    <StyledContainerTable>
      <StyledContainerTableHeader>
        <StyledContainerTableColumn style={ { width: '5%' } }>
          Item
        </StyledContainerTableColumn>
        <StyledContainerTableColumn style={ { width: '65%' } }>
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
      </StyledContainerTableHeader>
      {data.products.map((item, index) => (
        <StyledContainerTableRow key={ index }>
          <StyledContainerTableColumn
            style={ {
              backgroundColor: '#2FC18C',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5 } }
          >
            {item.id}
          </StyledContainerTableColumn>
          <StyledContainerTableColumn style={ { textAlign: 'left' } }>
            {item.name}
          </StyledContainerTableColumn>
          <StyledContainerTableColumn
            style={ {
              backgroundColor: '#036B52',
              color: '#FFF' } }
          >
            {item.SalesProducts.quantity}
          </StyledContainerTableColumn>
          <StyledContainerTableColumn
            style={ {
              backgroundColor: '#421981', color: '#FFF' } }
          >
            {item.price}
          </StyledContainerTableColumn>
          <StyledContainerTableColumn
            style={ { backgroundColor: '#056CF9',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              color: '#FFF' } }
          >
            {Number(item.price) * item.SalesProducts.quantity}
          </StyledContainerTableColumn>
        </StyledContainerTableRow>
      ))}
    </StyledContainerTable>
  );

  const returnTotal = () => (
    <StyledColumn
      style={ {
        position: 'absolute',
        bottom: '20%',
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
        {`TOTAL: ${formatedCurrencyBRL(`${total}`)} `}
      </StyledText>
    </StyledColumn>
  );

  const renderSaleId = () => (
    <StyledColumn style={ { width: '30%', justifyContent: 'center' } }>
      <StyledText upper>{`Pedido ${idWithFourDigits(data.id)}`}</StyledText>
    </StyledColumn>
  );

  const renderSeleDate = () => (
    <StyledColumn
      style={ {
        width: '30%',
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5 } }
    >
      <StyledText>{getDateFormated(data.saleDate)}</StyledText>
    </StyledColumn>
  );

  const renderSaleStatus = () => (
    <StyledColumn
      style={ {
        width: '35%',
        height: 40,
        justifyContent: 'center',
        backgroundColor: colorStatusOrder(data.status),
        borderRadius: 5,
      } }
    >
      <StyledText upper>{data.status}</StyledText>
    </StyledColumn>
  );

  const returnAllButtons = () => (
    <>
      <Button
        style={ {
          width: '90%',
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
          width: '90%',
          height: 40,
          backgroundColor: '#421981',
          margin: 0,
          marginLeft: '5%',
        } }
        title="SAIU PARA ENTREGA"
        onPress={ () => null }
      />
    </>
  );

  return (
    <StyledContainer>
      <StyledTitle>{data.id}</StyledTitle>
      <StyledContainerBoard>
        <StyledHeaderBoard>
          <StyledRow style={ { width: '35%', justifyContent: 'space-between' } }>
            {useMemo(renderSaleId, [data.id])}
            {useMemo(renderSeleDate, [data.saleDate])}
            {useMemo(renderSaleStatus, [data.status])}
          </StyledRow>
          <StyledRow
            style={ {
              width: '30%', heigth: '100%', justifyContent: 'space-between' } }
          >
            {useMemo(returnAllButtons, [])}
          </StyledRow>
        </StyledHeaderBoard>
        {useMemo(renderTable, [data.products])}
        {useMemo(returnTotal, [total])}
      </StyledContainerBoard>
    </StyledContainer>
  );
};

export default BoardOrder;

BoardOrder.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    saleDate: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.shape({
      quantity: PropTypes.number,
    })).isRequired,
  }).isRequired,
};
