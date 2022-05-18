import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';
import currencyBrl from '../../helpers/currencyBrl';
import { api } from '../../service/api';

const ProductsCheckout = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [sellerData, setSellerDate] = useState([]);
  const [dataStorage, setDataStorage] = useState([]);
  const [sellerId, setSellerId] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');

  const getSellers = async () => {
    try {
      const { data } = await api.get('/users/sellers');
      setSellerDate(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postOrder = async () => {
    try {
      const orders = {
        sellerId: Number(sellerId),
        totalPrice: Number(total),
        deliveryAddress,
        deliveryNumber,
        saleDate: new Date(),
        products: dataStorage.map((data) => {
          const { amount, id } = data;

          return { quantity: amount, productId: id };
        }),
      };

      const { data } = await api.post('/sales', orders);

      navigate(`/customer/orders/${String(data.id)}`);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleRemoveToCart = (item) => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    const deleteProduct = cartStorage
      .filter((cartProduct) => cartProduct.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(deleteProduct));
    setDataStorage(deleteProduct);
  };

  useEffect(() => {
    getSellers();
  }, []);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('cart'));
    setDataStorage(products);
  }, []);

  useEffect(() => {
    const result = dataStorage?.reduce((acc, curr) => acc
     + Number(curr.price) * curr.amount, 0);
    setTotal(result || 0);
  }, [dataStorage]);

  const renderForm = () => (
    <form>
      <label htmlFor="name">
        <select
          id="name"
          name="name"
          placeholder="Nome"
          onChange={ ({ target }) => setSellerId(target.value) }
          data-testid="customer_checkout__select-seller"
        >
          <option value="">Selecione...</option>
          {sellerData.map((seller) => (
            <option key={ seller.id } value={ seller.id }>
              { seller.name }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="address">
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Endereço"
          onChange={ ({ target }) => setDeliveryAddress(target.value) }
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        <input
          type="text"
          name="number"
          id="number"
          placeholder="Número"
          onChange={ ({ target }) => setDeliveryNumber(target.value) }
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ postOrder }
      >
        Finalizar Compra
      </button>
    </form>
  );

  const renderTable = () => (
    <table border={ 1 }>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        { dataStorage.map((item, index) => (
          <tr key={ item.id }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              { item.name }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              { item.amount }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              { currencyBrl(item.price).split('R$') }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              { currencyBrl(item.price * item.amount).split('R$') }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              <button type="button" onClick={ () => handleRemoveToCart(item) }>
                Remover
              </button>
            </td>
          </tr>
        )) }
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={ 4 }>Total</td>
          <td
            data-testid="customer_checkout__element-order-total-price"
            colSpan={ 1 }
          >
            { total ? currencyBrl(total).split('R$') : '0,00' }
          </td>
        </tr>
      </tfoot>
    </table>
  );

  return (
    <section>
      <Header type="consumer" />
      <h2>Finalizar pedido</h2>
      {renderTable()}
      <h2>Detalhes e Endereço para Entrega</h2>
      {renderForm()}
    </section>
  );
};

export default ProductsCheckout;
