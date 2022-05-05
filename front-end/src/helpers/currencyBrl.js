const currencyBrl = (number) => {
  const numberFormat = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
  return numberFormat;
};

export default currencyBrl;
