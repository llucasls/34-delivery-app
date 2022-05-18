import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';
import currencyBrl from '../../helpers/currencyBrl';
import formatedData from '../../helpers/formatedData';
import { api } from '../../service/api';
import './ProductsDetails.css';

const ProductsDetails = () => {
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

  const formatedOrder = (order) => String(order).padStart(Number('4'), 0);

  const renderSales = () => (
    dataSales.map((data, index) => (
      <button
        type="button"
        key={ String(data.id) }
        className="container-order"
        onClick={ () => navigate(`/customer/orders/${data.id}`) }
      >
        <span>{`Pedido ${formatedOrder(index + 1)}`}</span>
        <span>{`${data.status}`}</span>
        <span>{`${formatedData(data.saleDate)}`}</span>
        <span>{`${currencyBrl(data.totalPrice)}`}</span>
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

export default ProductsDetails;
