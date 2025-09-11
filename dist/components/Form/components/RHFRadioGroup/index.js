import { jsx as _jsx } from "react/jsx-runtime";
import { concatStyles } from "../../../../utils/concatStyles";
import styles from "./styles.module.scss";
import { RHFRadioInput } from "../RHFRadioInput";
export var RHFRadioGroup = function (_a) {
    var name = _a.name, options = _a.options, _b = _a.variant, variant = _b === void 0 ? "default" : _b, className = _a.className, onSelect = _a.onSelect;
    return (_jsx("div", { className: concatStyles([styles.radioOptions, className]), children: options.map(function (option, index) { return (_jsx(RHFRadioInput, { id: "".concat(name, "-").concat(option.value, "-").concat(index), name: name, label: option.label, value: option.value, variant: variant, onSelect: onSelect }, "".concat(name, "-").concat(option.value, "-").concat(index))); }) }));
};
