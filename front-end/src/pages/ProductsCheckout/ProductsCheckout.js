import React, { useEffect, useState } from 'react';
import { Board, Header, Input, Label, Select } from '../../components';
import currencyBrl from '../../helpers/currencyBrl';
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
  const [total, setTotal] = useState(0);
  const [dataStorage, setDataStorage] = useState([]);
  const [write, setWrite] = useState({
    name: '',
    address: '',
    number: '',
  });

  const postOrder = async () => {
    const orders = {
      userId: 1,
      sellerId: write.name = 1,
      totalPrice: total,
      deliveryAddress: write.address,
      deliveryNumber: write.number,
      saleDate: new Date(),
      products: dataStorage,
    };
    try {
      const { data } = await api.post('/sales', orders);

      console.log(data);
    } catch (error) {
      console.log(error.response.data);
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
    const products = JSON.parse(localStorage.getItem('cart'));
    setDataStorage(products);
  }, []);

  useEffect(() => {
    const result = dataStorage
      .reduce((acc, curr) => acc + Number(curr.price) * curr.amount, 0);
    setTotal(result);
  }, [dataStorage]);

  const handleInput = (event) => {
    const { title, value } = event.target;
    setWrite({ ...write, [title]: value });
  };

  const renderAdress = () => (
    <StyledForm>
      <Label style={ { width: '100%' } }>
        P.Vendedora Responsável:
        <Select
          name="name"
          title="name"
          options={ ['Fulana Pereira'] }
          onChange={ handleInput }
        />
      </Label>
      <Label style={ { width: '100%' } }>
        Endereço
        <Input
          onChange={ handleInput }
          type="text"
          title="address"
          name="address"
        />
      </Label>
      <Label style={ { width: '100%' } }>
        Número
        <Input onChange={ handleInput } type="number" title="number" name="number" />
      </Label>
      <StyledButtomSubmit
        size="20"
        type="submit"
        onClick={ postOrder }
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
          board={ dataStorage
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
            }) }
          title="Finalizar Pedido"
          total={
            <StyledText style={ { color: '#FFF' } }>
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
