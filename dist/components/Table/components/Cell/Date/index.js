"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const dayjs_1 = __importDefault(require("dayjs"));
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const convertDateToObject = (date) => {
    if (!date)
        return null;
    const formattedDate = (0, dayjs_1.default)(date).format("DD/MM/YY");
    const formattedTime = (0, dayjs_1.default)(date).format("HH:mm");
    return {
        date: formattedDate,
        time: formattedTime,
    };
};
const Date = ({ children }) => {
    const date = (0, react_1.useMemo)(() => {
        return convertDateToObject(children);
    }, [children]);
    if (!date)
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { children: "-" }) }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: styles_module_scss_1.default.cell, children: [(0, jsx_runtime_1.jsx)("p", { children: date.date }), (0, jsx_runtime_1.jsx)("time", { children: date.time })] }));
};
exports.Date = Date;
