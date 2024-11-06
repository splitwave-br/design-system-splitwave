import { jsx as _jsx } from "react/jsx-runtime";
import styles from './styles.module.scss';
// It can be used only inside the Cell component
export var Placeholder = function (_a) {
    var children = _a.children;
    return _jsx("span", { className: styles.text, children: children });
};
