import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "./styles.module.scss";
import variants from "./variants.module.scss";
import { concatStyles } from "../../utils/concatStyles";
import "./variables.scss";

export var Radio = function (_a) {
    var options = _a.options,
        value = _a.value,
        onSelect = _a.onSelect,
        variant = _a.variant === void 0 ? "default" : _a.variant,
        className = _a.className;

    var radioStyles = concatStyles([
        styles.radio,
        variants["variant__".concat(variant)],
        className ? className : ""
    ]);

    return (
        _jsx("div", {
            className: radioStyles,
            children: options.map(function (option) {
                return _jsx("label", {
                    className: styles.option,
                    children: _jsxs(_Fragment, {
                        children: [
                            _jsx("input", {
                                type: "radio",
                                name: "radio-group",
                                value: option.value,
                                checked: value === option.value,
                                onChange: function () { return onSelect(option.value); }
                            }),
                            option.label
                        ]
                    })
                }, option.value);
            })
        })
    );
};

Radio.displayName = "Radio";
