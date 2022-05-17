import React from 'react';
import currencyBrl from '../../../helpers/currencyBrl';
import {
  StyledContainerTable,
  StyledContainerTableHeader,
  StyledContainerTableRow,
  StyledContainerTableColumn,
} from './styles';

const renderTable = (dataStorage, handleRemoveToCart) => (
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
    {dataStorage ? dataStorage.map((item, index) => (
      <StyledContainerTableRow key={ index }>
        <StyledContainerTableColumn
          style={ {
            backgroundColor: '#2FC18C',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          } }
          data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        >
          {item.id}
        </StyledContainerTableColumn>
        <StyledContainerTableColumn
          style={ {
            textAlign: 'left', backgroundColor: '#EAF1EF',
          } }
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          {item.name}
        </StyledContainerTableColumn>
        <StyledContainerTableColumn
          style={ {
            backgroundColor: '#036B52',
            color: '#FFF',
          } }
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          {item.amount}
        </StyledContainerTableColumn>
        <StyledContainerTableColumn
          style={ {
            backgroundColor: '#421981', color: '#FFF',
          } }
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          {currencyBrl(`${item.price}`)}
        </StyledContainerTableColumn>
        <StyledContainerTableColumn
          style={ {
            backgroundColor: '#056CF9',
            color: '#FFF',
          } }
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          {currencyBrl(item.price * item.amount)}
        </StyledContainerTableColumn>
        <StyledContainerTableColumn
          style={ {
            backgroundColor: '#2FC18C',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            color: '#FFF',
            cursor: 'pointer',
          } }
          data-testid={ `customer_checkout__element-order-table-remove-item-${index}` }
          onClick={ () => handleRemoveToCart(item) }
        >
          Remover
        </StyledContainerTableColumn>
      </StyledContainerTableRow>
    )) : []}
  </StyledContainerTable>
);

export default renderTable;
