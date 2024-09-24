"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
require("./variables.scss");
const Item = ({ className, ...props }) => {
    const itemStyles = [styles_module_scss_1.default.item, className].join(" ");
    return (0, jsx_runtime_1.jsx)("button", { className: itemStyles, ...props });
};
exports.default = Item;
