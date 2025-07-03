import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
import variants from "./variants.module.scss";
import "./variants.module.scss";
import { concatStyles } from "../../utils/concatStyles";
import { Icon } from "../Icon";
export var Radio = function (_a) {
    var options = _a.options, value = _a.value, onSelect = _a.onSelect, _b = _a.variant, variant = _b === void 0 ? "default" : _b, className = _a.className;
    return (_jsx("div", { className: styles.radioOptions, children: options.map(function (option, index) {
            var isSelected = option.value === value;
            var radioClass = concatStyles([
                styles.radioButton,
                isSelected && styles.selected,
                variants["variant__".concat(variant)],
            ]);
            return (_jsxs("button", { type: "button", className: concatStyles([styles.radioContainer, className]), onClick: function () { return onSelect(option.value); }, children: [_jsx("div", { className: radioClass, children: isSelected && (_jsx("div", { className: styles.icon, children: _jsx(Icon, { name: "checkIcon", size: 3 }) })) }), _jsx("div", { className: styles.label, children: option.label })] }, "radio-".concat(option.value, "-").concat(index)));
        }) }));
};
export default Radio;
