export var formatCurrency = function (value) {
    var numericValue = typeof value === 'string' ? parseFloat(value) : value;
    var formattedValue = numericValue === null || numericValue === void 0 ? void 0 : numericValue.toLocaleString('pt-BR', {
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
