const formatedData = (dataUnformated) => {
  const NUMBERTEEN = 10;
  const date = new Date(dataUnformated).toISOString().slice(0, NUMBERTEEN).split('-')
    .reverse()
    .join('/');

  // const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  // date.toLocaleDateString('pt-BR', options);
  const day = date.split('/')[0];
  const month = date.split('/')[1];
  const yaer = date.split('/')[2];

  return `${(day)}/${(month)}/${yaer}`;
};

export default formatedData;
