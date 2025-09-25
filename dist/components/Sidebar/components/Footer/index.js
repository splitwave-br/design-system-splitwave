import { jsx as _jsx } from "react/jsx-runtime";
import { concatStyles } from "../../../../utils/concatStyles";
import styles from "./styles.module.scss";
import "../../variables.scss";
export var SidebarFooter = function (_a) {
    var children = _a.children, className = _a.className;
    var footerStyles = concatStyles([styles.footer, className]);
    return _jsx("footer", { className: footerStyles, children: children });
};
