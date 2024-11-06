import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./styles.module.scss";
import { Date } from "./Date";
import { Uuid } from "./Uuid";
import { Action } from "./Action";
export var Header = function (_a) {
    var children = _a.children, isFixed = _a.isFixed;
    var className = [styles.header, isFixed ? styles.isFixed : ""].join(" ");
    return _jsx("div", { className: className, children: children });
};
Header.Date = Date;
Header.Uuid = Uuid;
Header.Action = Action;
