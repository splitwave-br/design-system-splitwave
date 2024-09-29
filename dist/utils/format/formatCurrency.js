"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = void 0;
const formatCurrency = (value) => {
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
exports.formatCurrency = formatCurrency;
