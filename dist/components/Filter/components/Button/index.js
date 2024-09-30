"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// import { Icon } from '@/components/Icon';
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const useFilter_1 = require("../../hooks/useFilter");
const concatStyles_1 = require("../../../../utils/concatStyles");
const useFields_1 = require("../../hooks/useFields");
exports.Button = (0, react_1.forwardRef)(({ icon: IconCustom, children, isOpen, ...props }, ref) => {
    const { getIsActive } = (0, useFilter_1.useFilterContext)();
    const { fields } = (0, useFields_1.useFilterFields)();
    return ((0, jsx_runtime_1.jsxs)("button", { ...props, ref: ref, className: (0, concatStyles_1.concatStyles)([
            styles_module_scss_1.default.button,
            getIsActive(fields) ? styles_module_scss_1.default.active : "",
        ]), children: [children, IconCustom ? (0, jsx_runtime_1.jsx)(IconCustom, {}) : null] }));
});
exports.Button.displayName = "Trigger";
