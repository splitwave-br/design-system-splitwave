import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
// It can be used only inside the Cell component
export var Image = function (_a) {
    var src = _a.src;
    return _jsx("img", { className: styles.img, src: src });
};
