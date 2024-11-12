import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
var Nav = function (_a) {
    var children = _a.children;
    return (_jsx("div", { className: styles.wrapper, children: _jsx("div", { className: styles.nav, children: children }) }));
};
export default Nav;
