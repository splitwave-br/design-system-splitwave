import { jsx as _jsx } from "react/jsx-runtime";
import { concatStyles } from "../../../../../../utils/concatStyles";
import styles from "./styles.module.scss";
export var MenuItem = function (_a) {
    var children = _a.children, className = _a.className, isSelected = _a.isSelected, onClick = _a.onClick;
    var optionStyles = concatStyles([
        styles.option,
        isSelected && styles.option__selected,
        className,
    ]);
    return (_jsx("div", { className: optionStyles, onClick: onClick, children: children }));
};
