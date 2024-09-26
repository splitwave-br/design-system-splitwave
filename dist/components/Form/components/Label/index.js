"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = Label;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function Label({ children, ...rest }) {
    return ((0, jsx_runtime_1.jsx)("label", { className: styles_module_scss_1.default.label, ...rest, children: children }));
}
