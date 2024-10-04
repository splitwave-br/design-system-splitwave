"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useFilter_1 = require("../../hooks/useFilter");
const Dropdown_1 = require("../../../../components/Dropdown");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const __1 = require("../..");
const concatStyles_1 = require("../../../../utils/concatStyles");
const useFields_1 = require("../../hooks/useFields");
exports.Sort = (0, react_1.forwardRef)(({ getLabel, getValue: getValueOption, getId, field, label, options, className, }, ref) => {
    const { setFilter, getValue } = (0, useFilter_1.useFilterContext)();
    const { registerField } = (0, useFields_1.useFilterFields)();
    const currentValue = getValue(field);
    const handleChange = (option) => {
        return setFilter(field, getValueOption(option));
    };
    (0, react_1.useEffect)(() => {
        registerField(field);
    }, [field, registerField]);
    return ((0, jsx_runtime_1.jsx)(__1.Filter.Content, { spacing: "sm", hasClear: false, ref: ref, children: options.map((option, index) => {
            const value = getValueOption(option);
            if (option === "divider") {
                return (0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown.Divider, {}, value + index);
            }
            return ((0, jsx_runtime_1.jsx)(Dropdown_1.Dropdown.Item, { className: (0, concatStyles_1.concatStyles)([
                    getValueOption(option) === currentValue ? styles_module_scss_1.default.active : "",
                    className,
                ]), onClick: () => {
                    handleChange(option);
                }, children: getLabel(option) }, getValueOption(option)));
        }) }));
});
exports.Sort.displayName = "Menu";
