import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { concatStyles } from "../../../../../../utils/concatStyles";
import styles from "./styles.module.scss";
import { Badge } from "../../../../../../components/Badge";
import { Icon } from "../../../../../../components/Icon";
import "../../../Input/variables.scss";
export var SelectedValues = function (_a) {
    var selectedOptions = _a.selectedOptions, placeholder = _a.placeholder, disabled = _a.disabled, getLabel = _a.getLabel, onRemove = _a.onRemove;
    var containerStyles = concatStyles([
        styles.container,
        disabled && styles.container__disabled,
    ]);
    return (_jsx(_Fragment, { children: selectedOptions && selectedOptions.length > 0 ? (_jsx("div", { className: containerStyles, children: selectedOptions.map(function (option, index) {
                var optionLabel = getLabel(option);
                return (_jsxs(Badge, { className: styles.option, onClick: function (e) {
                        e.stopPropagation();
                        onRemove(option);
                    }, variant: "gray", children: [_jsx("span", { children: optionLabel }), _jsx(Icon, { size: 1, name: "x" })] }, "multiselect-option-".concat(index, "-").concat(optionLabel)));
            }) })) : (_jsx("span", { className: styles.placeholder, children: placeholder })) }));
};
