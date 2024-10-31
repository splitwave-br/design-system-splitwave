"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RHFCheckbox = RHFCheckbox;
const jsx_runtime_1 = require("react/jsx-runtime");
const Checkbox_1 = require("../../controls/Checkbox");
const react_hook_form_1 = require("react-hook-form");
function RHFCheckbox({ label, name }) {
    const { watch, getValues, setValue } = (0, react_hook_form_1.useFormContext)();
    const isChecked = watch(name);
    const handleCheck = () => {
        return setValue(name, !getValues(name), {
            shouldValidate: true,
        });
    };
    return (0, jsx_runtime_1.jsx)(Checkbox_1.Checkbox, { name: name, label: label, onChange: handleCheck, value: isChecked });
}
