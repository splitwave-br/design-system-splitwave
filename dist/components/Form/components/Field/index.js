import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
export function Field(_a) {
    var children = _a.children, _className = _a.className;
    var className = [styles.wrapper, _className].join(" ");
    return _jsx("div", { className: className, children: children });
}
