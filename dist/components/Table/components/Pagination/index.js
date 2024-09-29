"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
// import classnames from 'classnames';
// import { Icon } from '@/components/Icon';
const react_1 = require("react");
const Select_1 = require("../../../../components/Form/controls/Select");
const Pagination = ({ totalPages, handleClickOnPage, handleClickPrevPage, handleClickNextPage, currentPage, }) => {
    const pages = (0, react_1.useMemo)(() => {
        return Array.from({ length: totalPages }, (_, index) => index);
    }, [totalPages]);
    const isPrevDisabled = (0, react_1.useMemo)(() => currentPage === 0 || pages.length === 0, [pages, currentPage]);
    const isNextDisabled = (0, react_1.useMemo)(() => currentPage === pages.length - 1 || pages.length === 0, [pages, currentPage]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.wrapper, children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleClickPrevPage, className: styles_module_scss_1.default.button, disabled: isPrevDisabled, children: (0, jsx_runtime_1.jsx)("span", { children: "Anterior" }) }), (0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.pages, children: [(0, jsx_runtime_1.jsx)("span", { children: "P\u00E1gina" }), (0, jsx_runtime_1.jsx)(Select_1.Select, { size: 1, direction: "top", options: Array.from({ length: totalPages }, (_, index) => String(index + 1)), getLabel: (o) => o, getValue: (o) => o, placeholder: "0", onChange: (value) => handleClickOnPage(Number(value)), value: String(currentPage + 1) }), (0, jsx_runtime_1.jsxs)("span", { children: ["de ", pages.length] })] }), (0, jsx_runtime_1.jsx)("button", { className: styles_module_scss_1.default.button, onClick: handleClickNextPage, disabled: isNextDisabled, children: (0, jsx_runtime_1.jsx)("span", { children: "Pr\u00F3ximo" }) })] }));
};
exports.Pagination = Pagination;
