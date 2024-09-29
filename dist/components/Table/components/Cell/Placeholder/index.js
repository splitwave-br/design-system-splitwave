"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Placeholder = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
// It can be used only inside the Cell component
const Placeholder = ({ children }) => {
    return (0, jsx_runtime_1.jsx)("span", { className: styles_module_scss_1.default.text, children: children });
};
exports.Placeholder = Placeholder;
