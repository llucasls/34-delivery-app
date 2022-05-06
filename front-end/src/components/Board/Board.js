import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import idWithFourDigits from '../../helpers/idWithFourDigits';
import colorStatusOrder from '../../helpers/colorStatusOrder';
import getDateFormated from '../../helpers/getDataFormated';
import formatedCurrencyBRL from '../../helpers/formatedCurrencyBRL';
import colorColumnBoard from '../../helpers/colorColumnBoard';

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

const Board = ({
  tableColuns = [],
  tableRows = [],
  header = null,
  title,
}) => {
  // const [total, setTotal] = useState(0);

  // const getTotal = () => {
  //   const result = data.products
  //     .reduce((acc, curr) => acc + Number(curr.price) * curr.SalesProducts.quantity, 0);

  //   setTotal(result);
  // };

  // useEffect(() => {
  //   if (type === 'details') {
  //     getTotal();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const renderTable = () => (
    <StyledContainerTable>
      <StyledContainerTableHeader>
        {tableColuns.map((item, index) => (
          <StyledContainerTableColumn key={ index }>
            {item}
          </StyledContainerTableColumn>
        ))}
      </StyledContainerTableHeader>
      { tableRows.map((item, indexRow) => (
        <StyledContainerTableRow key={ indexRow }>
          {Object.values(item).map((row, indexColumn) => (
            <StyledContainerTableColumn
              key={ indexColumn }
              style={ {
                backgroundColor: colorColumnBoard(indexColumn),
                color: indexColumn === 1 ? '#262626' : '#FFF',
                width: indexColumn === 1 && '40%',
              } }
            >
              { row === 'excluir'
                ? (
                  <Button
                    style={ {
                      backgroundColor: 'transparent',
                      padding: 0,
                      margin: 0,
                      fontWeight: 600,
                    } }
                    size={ 16 }
                    title={ row }
                  />
                )
                : row }
            </StyledContainerTableColumn>
          ))}
        </StyledContainerTableRow>
      )) }
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

  const renderItemHeaderTable = (item, index) => (
    <StyledColumn style={ { width: '30%', justifyContent: 'center' } } key={ index }>
      <StyledText>{item}</StyledText>
    </StyledColumn>
  );

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledContainerBoard>
        <StyledHeaderBoard>
          {header}
        </StyledHeaderBoard>
        {renderTable()}
        {/* {useMemo(returnTotal, [total])} */}
      </StyledContainerBoard>
    </StyledContainer>
  );
};

export default Board;

Board.propTypes = {};
