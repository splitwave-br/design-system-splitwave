import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
export var Card = function (_a) {
    var children = _a.children, className = _a.className;
    return (_jsx("div", { className: styles.cell, children: _jsx("div", { className: [styles.cardWrapper, className].join(" "), children: _jsx("div", { className: styles.content, children: children }) }) }));
};
