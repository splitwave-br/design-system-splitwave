import { jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from "react-hook-form";
import { Radio, } from "../../controls/Radio";
export var RHFRadioInput = function (_a) {
    var label = _a.label, name = _a.name, variant = _a.variant, className = _a.className, id = _a.id, value = _a.value, onSelect = _a.onSelect;
    var _b = useFormContext(), register = _b.register, watch = _b.watch;
    var fieldRegister = register(name);
    var onChange = fieldRegister.onChange, ref = fieldRegister.ref;
    var selected = watch(name);
    var checked = selected === value;
    var handleSelect = function (val) {
        onChange({ target: { value: val, name: name } });
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(val);
    };
    return (_jsx(Radio, { id: id, name: name, label: label, value: value, checked: checked, onSelect: handleSelect, ref: ref, variant: variant, className: className }));
};
