import * as Yup from 'yup';

const schemaProductCheckout = Yup.object().shape({
  name: Yup.string().required('Adicione o vendedor'),
  address: Yup.string().required('Adicione o endereço'),
  number: Yup.string().required('Adicione o número da casa'),
});

export default schemaProductCheckout;
