const idWithFourDigits = (id) => {
  switch (String(`${id}`.length)) {
  case '1':
    return `000${id}`;
  case '2':
    return `00${id}`;
  case '3':
    return `0${id}`;
  default:
    return `${id}`;
  }
};

export default idWithFourDigits;
