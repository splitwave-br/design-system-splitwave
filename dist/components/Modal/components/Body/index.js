import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
var ModalBody = function (_a) {
    var children = _a.children, className = _a.className;
    var modalBodyStyles = [styles.body, className].join(" ");
    return _jsx("div", { className: modalBodyStyles, children: children });
};
export default ModalBody;
