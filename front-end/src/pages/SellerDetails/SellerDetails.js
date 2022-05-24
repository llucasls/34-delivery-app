import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../service/api';
import currencyBrl from '../../helpers/currencyBrl';

import { Header } from '../../components';

const SellerDetails = () => {
  const [order, setOrder] = useState(null);
  const [total, setTotal] = useState(0);
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

  const getTotal = () => {
    const result = order.products
      .reduce((acc, curr) => acc + Number(curr.price)
        * Number(curr.SalesProducts.quantity), 0);

    setTotal(result);
  };

  const statusOrder = async (status) => {
    try {
      await api.patch(`/sales/${order.id}`, {
        status,
      });

      getOrder();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (order) {
      getTotal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  const renderTable = () => (
    <>
      <div style={ { display: 'flex', flexDirection: 'row' } }>
        <p data-testid="seller_order_details__element-order-details-label-order-id">
          {order.id}
        </p>
        <p data-testid="seller_order_details__element-order-details-label-order-date">
          {order.saleDate}
        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {order.status}
        </p>
        <button
          type="button"
          disabled={ order.status !== 'Pendente' }
          data-testid="seller_order_details__button-preparing-check"
          onClick={ () => statusOrder('Preparando') }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          disabled={ order.status !== 'Preparando' }
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ () => statusOrder('Em Trânsito') }
        >
          SAIU PARA ENTREGA
        </button>
      </div>
      <table border={ 1 }>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { order.products.map((item, index) => (
            <tr key={ item.id }>
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${index}`
                }
              >
                { `${index + 1}` }
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-name-${index}` }
              >
                { item.name }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index}`
                }
              >
                { `${item.SalesProducts.quantity}` }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index}`
                }
              >
                { currencyBrl(item.price).split('R$') }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index}`
                }
              >
                { currencyBrl(item.price * item.SalesProducts.quantity).split('R$') }
              </td>
            </tr>
          )) }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={ 4 }>Total</td>
            <td
              data-testid="seller_order_details__element-order-total-price"
              colSpan={ 1 }
            >
              { currencyBrl(total).split('R$') }
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );

  return (
    <>
      <Header type="seller" />
      <div>
        { !order
          ? <h2>Carregando...</h2>
          : renderTable() }
      </div>
    </>
  );
};

export default SellerDetails;
