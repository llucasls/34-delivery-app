import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';
import { api } from '../../service/api';
import currencyBrl from '../../helpers/currencyBrl';

const ProductsOrders = () => {
  const [dataSales, setDataSales] = useState([]);
  const navigate = useNavigate();

  const getSales = async () => {
    try {
      const { data } = await api.get('/sales');
      setDataSales(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSales();
  }, []);

  const renderSales = () => {
    if (!dataSales.length) {
      return (
        <h2>Ainda não foi gerado nenhum pedido</h2>
      );
    }

    return (
      dataSales.map((sale, index) => (
        <button
          key={ index }
          type="button"
          onClick={ () => navigate(`/customer/orders/${sale.id}`) }
          style={ { width: 200, display: 'flex', flexDirection: 'column' } }
        >
          <span
            data-testid={ `customer_orders__element-order-id-${index}` }
          >
            { `${sale.id}` }
          </span>
          <span
            data-testid={ `customer_orders__element-delivery-status-${index}` }
          >
            { sale.status }
          </span>
          <span
            data-testid={ `customer_orders__element-order-date-${index}` }
          >
            { sale.saleDate }
          </span>
          <span
            data-testid={ `customer_orders__element-card-price-${index}` }
          >
            {`${currencyBrl(sale.totalPrice)}`}
          </span>
        </button>
      )));
  };

  return (
    <>
      <Header />
      <div>
        { !dataSales
          ? <h2>Carregando...</h2>
          : (
            <div>
              { renderSales() }
            </div>
          )}
      </div>
    </>
  );
};

export default ProductsOrders;
