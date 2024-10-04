"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const useFilter_1 = require("../../hooks/useFilter");
const concatStyles_1 = require("../../../../utils/concatStyles");
const useFields_1 = require("../../hooks/useFields");
exports.Content = (0, react_1.forwardRef)(({ hasClear = true, spacing = "default", children, className, onClose, ...props }, ref) => {
    const { clean } = (0, useFilter_1.useFilterContext)();
    const { fields } = (0, useFields_1.useFilterFields)();
    const contentStyles = (0, concatStyles_1.concatStyles)([
        styles_module_scss_1.default.content,
        styles_module_scss_1.default[`spacing__${spacing}`],
        className,
    ]);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, onClick: (e) => {
            e.stopPropagation();
        }, onKeyDown: (e) => {
            if (e.key === "Escape" || e.key === "Enter") {
                onClose?.();
            }
        }, className: contentStyles, ...props, children: [children, hasClear && ((0, jsx_runtime_1.jsx)("span", { onClick: () => {
                    clean(fields);
                    onClose?.();
                }, className: styles_module_scss_1.default.clean, children: "Limpar" }))] }));
});
exports.Content.displayName = "Menu";
