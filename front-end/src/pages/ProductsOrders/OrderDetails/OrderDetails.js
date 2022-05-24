import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../../components';
import colorStatusOrder from '../../../helpers/colorStatusOrder';
import currencyBrl from '../../../helpers/currencyBrl';
import formatedData from '../../../helpers/formatedData';
import formatedOrder from '../../../helpers/formatedOrder';
import useGetSallers from '../../../hooks/useGetSallers';
import { api } from '../../../service/api';

const OrderDetails = () => {
  const allSallers = useGetSallers();
  const [delivery, setDelivery] = useState('');
  const [dataSalesDetails, setDataSalesDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getSalesDetails = async () => {
      try {
        const { data } = await api.get(`/sales/${location.pathname.split('/')[3]}`);
        setDataSalesDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSalesDetails();
  }, [location.pathname]);

  const markAsDelivered = async () => {
    try {
      const { data } = await api.patch(`/sales/${location.pathname.split('/')[3]}`, {
        status: 'Entregue',
      });
      setDelivery(data.sale.status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dataSalesDetails) {
      setDelivery(dataSalesDetails.sale?.status);
    }
  }, [dataSalesDetails]);

  const renderSellerStatus = () => (
    <div
      style={ { display: 'flex', justifyContent: 'space-between', width: '35%' } }
    >
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {formatedOrder(dataSalesDetails.id)}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`P. Vend: ${dataSalesDetails.sellerId ? allSallers.map((data) => data.name)
          : 'Parece que deu algum erro'}`}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {formatedData(dataSalesDetails.saleDate)}
      </span>
      <span
        style={ { backgroundColor: delivery ? colorStatusOrder(delivery)
          : colorStatusOrder((dataSalesDetails.status)),
        fontWeight: 'bolder' } }
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {delivery || (dataSalesDetails.status)}
      </span>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        onClick={ markAsDelivered }
        disabled={ dataSalesDetails.status === 'Pendente'
        || dataSalesDetails.status === 'Preparando' }
      >
        Marcar como entregue
      </button>
    </div>
  );

  const renderSalesDetails = () => (
    <>
      {renderSellerStatus()}
      <table border={ 1 }>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { dataSalesDetails.products.map((item, index) => (
            <tr key={ item.id }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${item.id}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `customer_order_details__element-order
                -table-name-${item.id}` }
              >
                { item.name }
              </td>
              <td
                data-testid={ `customer_order_details__element-order
                -table-quantity-${item.id}` }
              >
                { item.SalesProducts.quantity }
              </td>
              <td
                data-testid={ `customer_order_details__element-order-table
                -unit-price-${item.id}` }
              >
                { currencyBrl(item.price).split('R$') }
              </td>
              <td
                data-testid={ `customer_order_details__element-order
                -table-sub-total-${item.id}` }
              >
                { currencyBrl(item.price
                * item.SalesProducts.quantity).split('R$') }
              </td>
            </tr>
          )) }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={ 4 }>Total</td>
            <td
              data-testid="customer_order_details__element-order-total-price"
              colSpan={ 1 }
            >
              { currencyBrl(dataSalesDetails.totalPrice) }
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );

  return (
    <>
      <Header />
      <div>
        <h2>Detalhe do Pedido</h2>
        {!dataSalesDetails
          ? <p>Carregando...</p>
          : renderSalesDetails()}
      </div>
    </>
  );
};

export default OrderDetails;
