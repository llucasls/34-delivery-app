import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';
import colorStatusOrder from '../../helpers/colorStatusOrder';
import currencyBrl from '../../helpers/currencyBrl';
import formatedData from '../../helpers/formatedData';
import formatedOrder from '../../helpers/formatedOrder';
import { api } from '../../service/api';

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

  const renderSales = () => (
    dataSales.map((data, index) => (
      <button
        type="button"
        key={ String(data.id) }
        className="container-order"
        onClick={ () => navigate(`/customer/orders/${data.id}`) }
        style={ { display: 'flex',
          justifyContent: 'space-between',
          width: '30%',
          padding: '20px',
          alignItems: 'center',
        } }
      >
        <span
          data-testid={ `customer_orders__element-order-id-${index}` }
        >
          {`Pedido ${formatedOrder(index + 1)}`}
        </span>
        <span
          data-testid={ `customer_orders__element-delivery-status-${index}` }
          style={ {
            backgroundColor: colorStatusOrder(data.status),
            padding: '20px',
            fontWeight: 'bolder',
          } }
        >
          { data.status}
        </span>
        <span
          data-testid={ `customer_orders__element-order-date-${index}` }
          style={ {
            display: 'flex',
            alignItems: 'center',
          } }
        >
          {`${formatedData(data.saleDate)}`}
        </span>
        <span
          data-testid={ `customer_orders__element-card-price-${index}` }
        >
          {`${currencyBrl(data.totalPrice)}`}
        </span>
      </button>
    ))
  );

  return (
    <>
      <Header />
      <div>
        <div>
          {renderSales()}
        </div>
      </div>
    </>
  );
};

export default ProductsOrders;
