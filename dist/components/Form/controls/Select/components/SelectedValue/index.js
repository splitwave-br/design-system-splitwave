import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { concatStyles } from "../../../../../../utils/concatStyles";
import "../../../Input/variables.scss";
import styles from "./styles.module.scss";
export var SelectedValue = function (_a) {
    var selectedOptionLabel = _a.selectedOptionLabel, placeholder = _a.placeholder, disabled = _a.disabled;
    return (_jsx(_Fragment, { children: selectedOptionLabel ? (_jsx("span", { className: concatStyles([
                styles.selectedValue,
                disabled && styles.selectedValue__disabled,
            ]), children: selectedOptionLabel })) : (_jsx("span", { className: styles.placeholder, children: placeholder })) }));
};
