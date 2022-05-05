import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import colorStatusOrder from '../../helpers/colorStatusOrder';
import idWithFourDigits from '../../helpers/idWithFourDigits';
import getDateFormated from '../../helpers/getDataFormated';
import formatedCurrencyBRL from '../../helpers/formatedCurrencyBRL';

import { StyledContainer, StyledRow, StyledColumn, StyledText } from './styles';

const CardOrder = ({ data }) => {
  const renderIdOrder = () => (
    <StyledColumn
      style={ {
        width: '20%', backgroundColor: '#fff', justifyContent: 'center' } }
    >
      <StyledText>pedido</StyledText>
      <StyledText>{idWithFourDigits(data.id)}</StyledText>
    </StyledColumn>
  );

  const renderAddress = () => (
    <StyledRow
      style={ {
        height: '30%',
        alignItems: 'flex-end',
      } }
    >
      <StyledText style={ { width: '100%' } } align="center">
        {`${data.deliveryAddress}, ${data.deliveryNumber}`}
      </StyledText>
    </StyledRow>
  );

  const renderStatus = () => (
    <StyledRow
      style={ {
        width: '49%',
        backgroundColor: colorStatusOrder(data.status),
        borderRadius: 5,
      } }
    >
      <StyledText align="center" size={ 1.4 } upper>{data.status}</StyledText>
    </StyledRow>
  );

  const renderDate = () => (
    <StyledRow
      style={ {
        backgroundColor: '#fff', width: '100%', height: '46%', borderRadius: 5 } }
    >
      <StyledText>
        {getDateFormated(data.saleDate)}
      </StyledText>
    </StyledRow>
  );

  const renderPrice = () => (
    <StyledRow
      style={ {
        backgroundColor: '#fff', width: '100%', height: '46%', borderRadius: 5 } }
    >
      <StyledText>
        {formatedCurrencyBRL(data.totalPrice)}
      </StyledText>
    </StyledRow>
  );

  return (
    <StyledContainer size={ 0.25 }>
      {useMemo(renderIdOrder, [data.id])}
      <StyledColumn
        style={ {
          width: '80%',
          justifyContent: 'space-between',
          padding: 10,
        } }
      >
        <StyledRow
          style={ {
            width: '100%', justifyContent: 'space-between' } }
        >
          {useMemo(renderStatus, [data.status])}
          <StyledColumn style={ { width: '49%' } }>
            {useMemo(renderPrice, [data.totalPrice])}
            {useMemo(renderDate, [data.saleDate])}
          </StyledColumn>
        </StyledRow>
        {useMemo(renderAddress, [])}
      </StyledColumn>
    </StyledContainer>
  );
};

export default CardOrder;

CardOrder.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    saleDate: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
};
