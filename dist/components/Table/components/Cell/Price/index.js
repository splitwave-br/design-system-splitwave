import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatCurrency } from '../../../../../utils/format/formatCurrency';
import styles from './styles.module.scss';
export var Price = function (_a) {
    var children = _a.children, _b = _a.hasHighlight, hasHighlight = _b === void 0 ? false : _b;
    if (!hasHighlight) {
        return _jsx("div", { className: styles.default, children: formatCurrency(children) });
    }
    var isPositive = hasHighlight && children >= 0;
    var className = isPositive ? styles.positive : styles.negative;
    return (_jsxs("div", { className: className, children: [!isPositive ? '- ' : null, formatCurrency(Math.abs(children))] }));
};
