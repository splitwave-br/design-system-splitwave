import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
import { concatStyles } from "../../../../utils/concatStyles";
export var NavSection = function (_a) {
    var children = _a.children, disableBottomBorder = _a.disableBottomBorder;
    var containerStyles = concatStyles([
        styles.container,
        disableBottomBorder && styles.disableBottomBorder,
    ]);
    return _jsx("div", { className: containerStyles, children: children });
};
