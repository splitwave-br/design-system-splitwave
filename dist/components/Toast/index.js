"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = Toast;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Icon_1 = require("../../components/Icon");
const react_1 = require("react");
function Toast({ title: _title, message, timeout = 0, onClose, icon, error, success, }) {
    const [hide, setHide] = (0, react_1.useState)(false);
    const [visible, setVisible] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setVisible(true);
        const hideTimeout = setTimeout(() => {
            setHide(true);
        }, timeout);
        const closeTimeout = setTimeout(() => {
            onClose?.();
            setVisible(false);
        }, timeout + 300);
        return () => {
            clearTimeout(hideTimeout);
            clearTimeout(closeTimeout);
        };
    }, []);
    const title = (0, react_1.useMemo)(() => {
        if (_title)
            return _title;
        if (error)
            return "Erro";
        if (success)
            return "Sucesso";
    }, [_title, success, error]);
    const iconName = (0, react_1.useMemo)(() => {
        if (error)
            return "close";
        if (success)
            return "check";
        return icon;
    }, [icon, error, success]);
    if (!visible)
        return null;
    const className = [
        styles_module_scss_1.default.wrapper,
        hide && styles_module_scss_1.default.hide,
        error && styles_module_scss_1.default.error,
        success && styles_module_scss_1.default.success,
    ].join(" ");
    //
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, children: [iconName && (0, jsx_runtime_1.jsx)(Icon_1.Icon, { name: iconName, size: 2 }), (0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.content, children: [(0, jsx_runtime_1.jsx)("span", { className: styles_module_scss_1.default.title, children: title }), (0, jsx_runtime_1.jsx)("span", { className: styles_module_scss_1.default.message, children: message })] }), (0, jsx_runtime_1.jsx)("div", { className: styles_module_scss_1.default.progressWrapper, children: (0, jsx_runtime_1.jsx)("div", { className: styles_module_scss_1.default.progress, style: { "--toast-duration": `${timeout}ms` } }) })] }));
}
