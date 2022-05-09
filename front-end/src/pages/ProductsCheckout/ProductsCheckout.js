import React, { useEffect, useState } from 'react';
import { Board, Header } from '../../components';
import currencyBrl from '../../helpers/currencyBrl';

import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledContainerAdress,
  StyledContainerAdressBoard,
} from './styles';

const ProductsCheckout = () => {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  const handleRemoveToCart = (product) => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    const deleteProduct = cartStorage
      .filter((cartProduct) => cartProduct.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(deleteProduct));
    setData(deleteProduct);
  };

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('cart'));
    setData(products);
  }, []);

  useEffect(() => {
    const result = data
      .reduce((acc, curr) => acc + Number(curr.price) * curr.amount, 0);
    setTotal(result);
  }, [data]);

  //         </StyledContainerTableColumn>
  //         <StyledContainerTableColumn
  //           style={ {
  //             backgroundColor: '#2FC18C',
  //             borderTopRightRadius: 5,
  //             borderBottomRightRadius: 5,
  //             color: '#FFF',
  //           } }
  //           onClick={ () => handleRemoveToCart(item) }
  //         >
  //           Remover
  //         </StyledContainerTableColumn>
  //       </StyledContainerTableRow>
  //     ))}
  //   </StyledContainerTable>
  // );

  // const returnTotal = () => (
  //   <StyledColumn
  //     style={ {
  //       position: 'absolute',
  //       bottom: '35%',
  //       right: '15%',
  //       display: 'flex',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       backgroundColor: '#036B52',
  //       height: 60,
  //       width: 200,
  //       borderRadius: 5,
  //     } }
  //   />
  // );

  /* <StyledContainerBoard>
    <StyledHeaderBoard>
      {useMemo(renderTable, [data, total])}
      {useMemo(returnTotal, [total])}
    </StyledHeaderBoard>
  </StyledContainerBoard> */
  return (
    <>
      <Header />
      <StyledContainer>
        <Board
          boardColoumns={ ['Item',
            'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item'] }
          board={ data
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
          onClick={ () => handleRemoveToCart(data.id) }
          total={
            <StyledText style={ { color: '#FFF' } }>
              {currencyBrl(total)}
            </StyledText>
          }
        />
      </StyledContainer>
      <StyledContainerAdress>
        <StyledContainerAdressBoard>
          <StyledTitle>Endereço de entrega</StyledTitle>
        </StyledContainerAdressBoard>
      </StyledContainerAdress>
    </>
  );
};

export default ProductsCheckout;
