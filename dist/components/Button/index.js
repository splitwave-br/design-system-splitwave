"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const variants_module_scss_1 = __importDefault(require("./variants.module.scss"));
const Button = ({ children, variant = 'primary', size = 'large', type = 'button', disabled, loading, className, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)("div", { className: styles_module_scss_1.default.loading_overlay, children: " " }), (0, jsx_runtime_1.jsx)("button", { type: type, disabled: loading || disabled, className: [
                    styles_module_scss_1.default.button,
                    styles_module_scss_1.default[`size__${size}`],
                    variants_module_scss_1.default[`variant__${variant}`],
                    className ? className : '',
                    loading ? variants_module_scss_1.default.loading : '',
                ].join(' '), ...props, children: children })] }));
};
exports.Button = Button;
