import React, { useMemo } from 'react';
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
  StyledContainerItem,
  StyledColumn,
  StyledRow,
} from './styles';

const BoardOrder = ({ data }) => {
  const renderTable = (item) => (
    <StyledContainerItem>
      <StyledText>{item.name}</StyledText>
    </StyledContainerItem>
  );

  // const returnTotal = () => {};

  const renderSaleId = () => (
    <StyledColumn style={ { width: '30%', justifyContent: 'center' } }>
      <StyledText upper>{`Pedido ${idWithFourDigits(data.id)}`}</StyledText>
    </StyledColumn>
  );

  const renderSeleDate = () => (
    <StyledColumn style={ { width: '25%', height: 40, justifyContent: 'center', backgroundColor: "#fff", borderRadius: 5 } }>
      <StyledText>{getDateFormated(data.saleDate)}</StyledText>
    </StyledColumn>
  );

  const renderSaleStatus = () => (
    <StyledColumn
      style={ {
        width: '40%',
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
          <StyledRow style={ { width: '30%', justifyContent: 'space-between' } }>
            {useMemo(renderSaleId, [data.id])}
            {useMemo(renderSeleDate, [data.saleDate])}
            {useMemo(renderSaleStatus, [data.status])}
          </StyledRow>
          <StyledRow style={ { width: '30%', heigth: '100%', justifyContent: 'space-between' } }>
            {useMemo(returnAllButtons, [])}
          </StyledRow>
        </StyledHeaderBoard>
        {data.products.map((item) => renderItems(item))}
      </StyledContainerBoard>
    </StyledContainer>
  );
};

export default BoardOrder;
