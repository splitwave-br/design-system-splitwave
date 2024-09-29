"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const formatCurrency_1 = require("../../../../../utils/format/formatCurrency");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Price = ({ children, hasHighlight = false }) => {
    if (!hasHighlight) {
        return (0, jsx_runtime_1.jsx)("div", { className: styles_module_scss_1.default.default, children: (0, formatCurrency_1.formatCurrency)(children) });
    }
    const isPositive = hasHighlight && children >= 0;
    const className = isPositive ? styles_module_scss_1.default.positive : styles_module_scss_1.default.negative;
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, children: [!isPositive ? '- ' : null, (0, formatCurrency_1.formatCurrency)(Math.abs(children))] }));
};
exports.Price = Price;
