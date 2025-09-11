import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import styles from "./styles.module.scss";
import variants from "./variants.module.scss";
import { concatStyles } from "../../../../utils/concatStyles";
import { Icon } from "../../../../components/Icon";
export var Radio = forwardRef(function (_a, ref) {
    var id = _a.id, name = _a.name, label = _a.label, value = _a.value, _b = _a.checked, checked = _b === void 0 ? false : _b, onSelect = _a.onSelect, _c = _a.variant, variant = _c === void 0 ? "default" : _c, className = _a.className;
    var radioClass = concatStyles([
        styles.radioButton,
        checked && styles.selected,
        variants["variant__".concat(variant)],
    ]);
    return (_jsxs("label", { htmlFor: id, className: concatStyles([styles.radioContainer, className]), children: [_jsx("input", { id: id, type: "radio", name: name, value: value, checked: checked, onChange: function () { return onSelect(value); }, ref: ref, className: styles.radioInput }), _jsx("div", { className: radioClass, "aria-hidden": "true", children: checked && (_jsx("div", { className: styles.icon, children: _jsx(Icon, { name: "checkIcon" }) })) }), _jsx("span", { className: styles.label, children: label })] }));
});
Radio.displayName = "RadioInput";
