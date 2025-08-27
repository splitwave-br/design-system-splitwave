import { jsx as _jsx } from "react/jsx-runtime";
import "../../../Input/variables.scss";
import styles from "./styles.module.scss";
export var SearchInput = function (_a) {
    var placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange;
    return (_jsx("input", { className: styles.searchInput, placeholder: placeholder, autoFocus: true, value: value, onChange: function (e) { return onChange(e.target.value); } }));
};
