"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = Select;
const jsx_runtime_1 = require("react/jsx-runtime");
// import { Icon, TIcons } from '../../../../components/Icon';
const react_1 = require("react");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const concatStyles_1 = require("../../../../utils/concatStyles");
const OPTION_WRAPPER_CLASSES = {
    top: styles_module_scss_1.default.optionsWrapperTop,
    bottom: styles_module_scss_1.default.optionsWrapperBottom,
};
function Select({ size = 2, direction = "bottom", className, 
// suffix,
options, getLabel, getValue, getId, placeholder = "Selecione", onChange, renderItem, value: _value, ...props }) {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [selectedOption, setSelectedOption] = (0, react_1.useState)(null);
    const [value, setValue] = (0, react_1.useState)(_value);
    // Need to set the value when the prop changes to control the value by the parent
    (0, react_1.useEffect)(() => {
        if (_value) {
            setValue(_value);
        }
    }, [_value]);
    const handleGetValue = (0, react_1.useCallback)((option) => {
        if (!option)
            return "";
        const value = getValue?.(option);
        if (typeof value === "undefined")
            return option;
        return value;
    }, [getValue]);
    const handleSelect = (option) => {
        if (handleGetValue(option) === handleGetValue(selectedOption)) {
            onChange?.("");
            setValue("");
        }
        else {
            onChange?.(option);
            setValue(handleGetValue(option));
        }
    };
    (0, react_1.useEffect)(() => {
        if (handleGetValue(selectedOption) !== value) {
            const currentOption = options.find((option) => handleGetValue(option) === value);
            setSelectedOption(currentOption);
        }
    }, [value, options, handleGetValue, selectedOption]);
    const handleOpenOptions = (e) => {
        e.stopPropagation();
        if (!props.disabled)
            setIsOpen((prev) => !prev);
    };
    const handleClickWindow = (0, react_1.useCallback)(() => {
        console.log("Click Window!");
        setIsOpen(false);
        document.removeEventListener("click", handleClickWindow);
    }, []);
    (0, react_1.useEffect)(() => {
        if (isOpen) {
            document.addEventListener("click", handleClickWindow);
        }
        else {
            document.removeEventListener("click", handleClickWindow);
        }
    }, [isOpen, handleClickWindow]);
    const isDisabled = props.disabled;
    const wrapperClass = [
        styles_module_scss_1.default.wrapper,
        className ? className : "",
        isOpen ? styles_module_scss_1.default["wrapper-opened"] : "",
        isDisabled && styles_module_scss_1.default.disabled,
    ].join(" ");
    const selectClass = [
        styles_module_scss_1.default.select,
        isDisabled && styles_module_scss_1.default.disabled,
        styles_module_scss_1.default[`select-size-${size}`],
    ].join(" ");
    const selectedValueClass = [
        styles_module_scss_1.default.selected_value,
        isDisabled && styles_module_scss_1.default.disabled,
    ].join(" ");
    const optionWrapperClass = OPTION_WRAPPER_CLASSES[direction];
    return ((0, jsx_runtime_1.jsxs)("div", { className: wrapperClass, onClick: handleOpenOptions, children: [(0, jsx_runtime_1.jsx)("div", { className: selectClass, children: selectedOption ? ((0, jsx_runtime_1.jsx)("span", { className: selectedValueClass, children: getLabel(selectedOption) })) : ((0, jsx_runtime_1.jsx)("span", { children: placeholder })) }), isOpen && ((0, jsx_runtime_1.jsx)("div", { className: optionWrapperClass, children: !!options.length ? (options.map((option) => {
                    const isSelected = handleGetValue(option) === handleGetValue(selectedOption);
                    const className = (0, concatStyles_1.concatStyles)([
                        styles_module_scss_1.default.option,
                        isSelected && styles_module_scss_1.default.optionSelected,
                    ]);
                    const onClick = () => handleSelect(option);
                    const id = getId?.(option);
                    const value = getValue?.(option);
                    const key = id ? id : value;
                    return renderItem ? (renderItem({ option, className, onClick })) : ((0, jsx_runtime_1.jsx)("span", { className: className, onClick: onClick, children: getLabel(option) }, key));
                })) : ((0, jsx_runtime_1.jsx)("span", { className: styles_module_scss_1.default["empty-options"], children: "Nenhum item encontrado" })) }))] }));
}
