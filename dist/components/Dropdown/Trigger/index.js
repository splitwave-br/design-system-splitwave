"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
require("./variables.scss");
const concatStyles_1 = require("../../../utils/concatStyles");
const Trigger = (0, react_1.forwardRef)(({ children, className, isOpen, ...props }, ref) => {
    if (typeof children === "function") {
        return children(props, ref);
    }
    const triggerStyles = (0, concatStyles_1.concatStyles)([styles_module_scss_1.default.wrapper, className]);
    return ((0, jsx_runtime_1.jsx)("button", { ref: ref, className: triggerStyles, ...props, children: children }));
});
Trigger.displayName = "Trigger";
exports.default = Trigger;
