"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect } from "react";
import { useFilterContext } from "../../hooks/useFilter";
import { Dropdown } from "../../../../components/Dropdown";
import styles from "./styles.module.scss";
import { concatStyles } from "../../../../utils/concatStyles";
import { useFilterFields } from "../../hooks/useFields";
export var Sort = forwardRef(function (_a, ref) {
    var getLabel = _a.getLabel, getValueOption = _a.getValue, getId = _a.getId, field = _a.field, label = _a.label, options = _a.options, className = _a.className;
    var _b = useFilterContext(), setFilter = _b.setFilter, getValue = _b.getValue;
    var registerField = useFilterFields().registerField;
    var currentValue = getValue(field);
    var handleChange = function (option) {
        return setFilter(field, getValueOption(option));
    };
    useEffect(function () {
        registerField(field);
    }, [field, registerField]);
    return (_jsx(Dropdown.Menu, { ref: ref, children: options.map(function (option, index) {
            var value = getValueOption(option);
            if (option === "divider") {
                return _jsx(Dropdown.Divider, {}, "divider-".concat(index));
            }
            return (_jsx(Dropdown.Item, { className: concatStyles([
                    value === currentValue ? styles.active : "",
                    className,
                ]), onClick: function () {
                    handleChange(option);
                }, children: getLabel(option) }, "".concat(value, "-").concat(index)));
        }) }));
});
Sort.displayName = "Menu";
