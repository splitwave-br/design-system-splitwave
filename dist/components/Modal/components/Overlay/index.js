import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
var Overlay = function (_a) {
    var children = _a.children, onClose = _a.onClose;
    var handleClick = function (event) {
        event.stopPropagation();
        if (event.target instanceof HTMLDivElement &&
            event.target.classList.contains("overlay")) {
            onClose();
        }
    };
    return (_jsx("div", { className: "".concat(styles.overlay, " overlay"), onMouseDown: handleClick, children: children }));
};
export default Overlay;
