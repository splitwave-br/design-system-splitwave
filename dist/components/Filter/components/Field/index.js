"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "../../../../components/Form/controls/Input";
import { useFilterContext } from "../../hooks/useFilter";
import { useEffect, useRef } from "react";
import { Form } from "../../../../components/Form";
import { useFilterFields } from "../../hooks/useFields";
export var Field = function (_a) {
    var field = _a.field, label = _a.label, mask = _a.mask;
    var _b = useFilterContext(), setFilter = _b.setFilter, getValue = _b.getValue;
    var registerField = useFilterFields().registerField;
    var inputRef = useRef(null);
    useEffect(function () {
        registerField(field);
    }, [field, registerField]);
    useEffect(function () {
        if (inputRef.current) {
            inputRef.current.focus({ preventScroll: true });
        }
    }, []);
    var handleChange = function (e) {
        if (mask)
            return setFilter(field, mask(e.target.value));
        return setFilter(field, e.target.value);
    };
    return (_jsxs(Form.Field, { children: [label && _jsx(Form.Label, { children: label }), _jsx(Input, { ref: inputRef, onChange: handleChange, value: getValue(field) || "" })] }));
};
