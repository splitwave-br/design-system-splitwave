import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
import classnames from "classnames";
export var ThemePreview = function (_a) {
    var children = _a.children, showMenu = _a.showMenu;
    return (_jsxs("div", { className: styles.wrapper, children: [_jsxs("div", { className: classnames("light-theme", styles.lightTheme), children: [_jsx("h2", { className: styles.title, children: "Light Theme" }), children] }), _jsxs("div", { style: { marginTop: showMenu ? 200 : 0 }, className: classnames("dark-theme", styles.darkTheme), children: [_jsx("h2", { className: styles.title, children: "Dark Theme" }), children] })] }));
};
