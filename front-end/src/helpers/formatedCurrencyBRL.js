const formatedCurrencyBRL = (value) => {
  const money = Number(value)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return money;
};

export default formatedCurrencyBRL;
