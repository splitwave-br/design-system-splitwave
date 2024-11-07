"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox } from "../../controls/Checkbox";
import { useFormContext } from "react-hook-form";
export function RHFCheckbox(_a) {
    var label = _a.label, name = _a.name;
    var _b = useFormContext(), watch = _b.watch, getValues = _b.getValues, setValue = _b.setValue;
    var isChecked = watch(name);
    var handleCheck = function () {
        return setValue(name, !getValues(name), {
            shouldValidate: true,
        });
    };
    return _jsx(Checkbox, { label: label, onChange: handleCheck, value: isChecked });
}
