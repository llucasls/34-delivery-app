import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Board, Header, Input, Label, Select } from '../../components';
import currencyBrl from '../../helpers/currencyBrl';
import schemaProductCheckout from '../../schemas/product.checkout';
import { api } from '../../service/api';

import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledContainerAdress,
  StyledContainerAdressBoard,
  StyledButtomSubmit,
  StyledForm,
} from './styles';

const ProductsCheckout = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [sellerData, setSellerDate] = useState([]);
  const [dataStorage, setDataStorage] = useState([]);
  const [write, setWrite] = useState({
    name: { field: '', error: '' },
    address: { field: '', error: '' },
    number: { field: '', error: '' },
  });

  const getSellers = async () => {
    try {
      const { data } = await api.get('/users/sellers');
      setSellerDate(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postOrder = async () => {
    const productsRender = dataStorage.map((data) => {
      const { amount, id } = data;
      return { quantity: amount, productId: id };
    });
    const orders = {
      sellerId: sellerData.find((salleInd) => salleInd.name === write.name.field).id,
      totalPrice: total,
      deliveryAddress: write.address,
      deliveryNumber: write.number,
      saleDate: new Date(),
      products: productsRender,
    };
    try {
      const { data } = await api.post('/sales', orders);

      localStorage.removeItem('cart');

      navigate(`/customer/orders/${String(data.id)}`);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const validate = async () => {
    try {
      await schemaProductCheckout.validate({
        name: write.name.field,
        address: write.address.field,
        number: write.number.field,
      }, { abortEarly: false });
      await postOrder();
    } catch (error) {
      const errorMessages = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          errorMessages[err.path] = err.message;
        });
      }
      setWrite({
        name: { ...write.name, error: errorMessages.name },
        address: { ...write.address, error: errorMessages.address },
        number: { ...write.number, error: errorMessages.number },
      });
    }
  };

  const handleRemoveToCart = (product) => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    const deleteProduct = cartStorage
      .filter((cartProduct) => cartProduct.id !== product.id);
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

  const handleInput = (event) => {
    const { title, value } = event.target;
    setWrite({ ...write, [title]: { field: value, error: '' } });
  };

  const renderAdress = () => (
    <StyledForm>
      <Label style={ { width: '100%' } }>
        P.Vendedora Responsável:
        <Select
          name="name"
          title="name"
          options={ sellerData.map((seller) => seller.name) }
          onChange={ handleInput }
          error={ write.name.error }
          style={ { width: '300px' } }
          data-testid="customer_checkout__select-seller"
        />
      </Label>
      <Label style={ { width: '100%' } }>
        Endereço
        <Input
          onChange={ handleInput }
          type="text"
          title="address"
          name="address"
          error={ write.address.error }
          style={ { width: '400px' } }
          testid="customer_checkout__input-address"

        />
      </Label>
      <Label style={ { width: '100%' } }>
        Número
        <Input
          onChange={ handleInput }
          type="number"
          title="number"
          name="number"
          error={ write.number.error }
          style={ { width: '300px' } }
          testid="customer_checkout__input-addressNumber"
        />
      </Label>
      <StyledButtomSubmit
        size="20"
        type="submit"
        onClick={ async () => validate() }
        testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </StyledButtomSubmit>
    </StyledForm>
  );

  return (
    <>
      <Header />
      <StyledContainer>
        <Board
          boardColoumns={ ['Item',
            'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item'] }
          // boardDataTestId={ [
          //   'customer_checkout__element-order-table-item-number-',
          //   'customer_checkout__element-order-table-name-',
          //   'customer_checkout__element-order-table-quantity-',
          //   'customer_checkout__element-order-table-unit-price-',
          //   'customer_checkout__element-order-table-sub-total-',
          //   'customer_checkout__element-order-table-remove-',
          // ] }
          board={ dataStorage ? dataStorage

            .map((item, index) => {
              const { name, amount, price } = item;

              return {
                item: index + 1,
                name,
                amount,
                price: currencyBrl(`${price}`),
                subTotal: currencyBrl(price * amount),
                // remover: 'Remover',
                remover: () => handleRemoveToCart(item),

              };
            }) : [] }
          title="Finalizar Pedido"
          total={
            <StyledText
              style={ { color: '#FFF' } }
              data-testid="customer_checkout__element-order-total-price"
            >
              {currencyBrl(total)}
            </StyledText>
          }
        />
      </StyledContainer>
      <StyledContainerAdress>
        <StyledTitle>Detalhes e Endereço para Entrega</StyledTitle>
        <StyledContainerAdressBoard>
          {renderAdress()}
        </StyledContainerAdressBoard>
      </StyledContainerAdress>
    </>
  );
};

export default ProductsCheckout;
