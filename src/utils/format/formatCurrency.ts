export const formatCurrency = (value: number | string) => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;

  const formattedValue = numericValue?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  if (numericValue < 0) {
    return formattedValue.replace('-', '').replace('R$', 'R$ -');
  }

  if (numericValue === 0) {
    return formattedValue.replace('-', '');
  }

  return formattedValue;
};
