import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../service/api';

import { Header } from '../../components';

const SellerOrders = () => {
  const [orders, setOrders] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/seller/orders/${id}`);
  };

  const getOrder = async () => {
    try {
      const { data } = await api.get('/sales');

      setOrders(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const renderOrders = () => {
    if (!orders.length) {
      return (
        <h2>Ainda não foi gerado nenhum pedido</h2>
      );
    }

    return (
      orders.map((order, index) => (
        <button
          key={ index }
          type="button"
          onClick={ () => handleNavigate(order.id + 1) }
        >
          <div>
            <p data-testid={ `seller_orders__element-order-id-${order.id}` }>
              {order.id}
            </p>
            <p data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
              {order.status}
            </p>
            <p data-testid={ `seller_orders__element-card-price-${order.id}` }>
              {order.totalPrice}
            </p>
            <p data-testid={ `seller_orders__element-order-date-${order.id}` }>
              {order.saleDate}
            </p>
            <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
              {`${order.deliveryAddress}, ${order.deliveryNumber}`}
            </p>
          </div>
        </button>
      ))
    );
  };

  return (
    <>
      <Header type="seller" />
      <div>
        { !orders
          ? <h2>Carregando...</h2>
          : (
            <div>
              {renderOrders()}
            </div>
          )}
      </div>
    </>
  );
};

export default SellerOrders;
