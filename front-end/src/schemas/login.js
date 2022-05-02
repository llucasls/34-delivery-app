import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Email é obrigatorio'),
  password: Yup.string().required('Senha é obrigatória'),
});

export default loginSchema;
