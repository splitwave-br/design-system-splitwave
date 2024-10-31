"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const Container = ({ children, onSubmit, registerForm, ...props }) => {
    const { handleSubmit } = registerForm;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.FormProvider, { ...registerForm, children: (0, jsx_runtime_1.jsx)("form", { ...props, onSubmit: onSubmit, children: children }) }));
};
exports.Container = Container;
