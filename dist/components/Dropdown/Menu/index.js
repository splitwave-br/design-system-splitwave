"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const concatStyles_1 = require("../../../utils/concatStyles");
const Menu = (0, react_1.forwardRef)(({ children, className, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, concatStyles_1.concatStyles)([styles_module_scss_1.default.menu, className]), ...props, children: children }));
});
Menu.displayName = "Menu";
exports.default = Menu;
