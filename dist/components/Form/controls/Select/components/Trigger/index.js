import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../../../../../../components/Icon";
import styles from "./styles.module.scss";
import { concatStyles } from "../../../../../../utils/concatStyles";
import { SearchInput } from "../SearchInput";
import "../../../Input/variables.scss";
export var SelectTrigger = function (_a) {
    var prefix = _a.prefix, disabled = _a.disabled, selectedLabel = _a.selectedLabel, children = _a.children, shouldRenderSearch = _a.shouldRenderSearch, searchValue = _a.searchValue, onSearchChange = _a.onSearchChange, triggerClassname = _a.triggerClassname;
    var triggerStyles = concatStyles([
        styles.trigger,
        prefix ? styles.prefix : "",
        disabled ? styles.trigger__disabled : "",
        triggerClassname,
    ]);
    return (_jsxs("div", { className: triggerStyles, children: [prefix && _jsx(Icon, { className: styles.prefixIcon, name: prefix, size: 2 }), shouldRenderSearch ? (_jsx(SearchInput, { placeholder: selectedLabel || "Pesquise", value: searchValue, onChange: onSearchChange })) : (children), _jsx(Icon, { className: styles.suffixIcon, name: "chevron-down", size: 2 })] }));
};
