"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = Badge;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const variants_module_scss_1 = __importDefault(require("./variants.module.scss"));
const sizes_module_scss_1 = __importDefault(require("./sizes.module.scss"));
function Badge({ children, variant = "gray", size = "sm", disabled, className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("button", { disabled: disabled, className: [
            styles_module_scss_1.default.button,
            size ? sizes_module_scss_1.default[size] : "",
            variant ? variants_module_scss_1.default[variant] : "",
            className ? className : "",
        ].join(" "), ...props, children: children }));
}
