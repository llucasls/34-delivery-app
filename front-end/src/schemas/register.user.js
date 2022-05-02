import * as Yup from 'yup';

const schemaRegister = Yup.object().shape({
  name: Yup.string().min(Number('12')).required('Nome é obrigatório'),
  email: Yup.string().email().required('Email é obrigatorio'),
  password: Yup.string().min(Number('6')).required('Senha é obrigatória'),
});

export default schemaRegister;
