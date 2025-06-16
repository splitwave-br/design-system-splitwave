import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
export var Card = function (_a) {
    var children = _a.children;
    return _jsx("div", { className: styles.cardWrapper, children: _jsx("div", { className: styles.content, children: children }) });
};
