const colorStatusOrder = (status) => {
  switch (status) {
  case 'Pendente':
    return '#D3C63C';
  case 'Preparando':
    return '#87D53C';
  case 'Entregue':
    return '#3BD5B0';
  default:
  }
};

export default colorStatusOrder;
