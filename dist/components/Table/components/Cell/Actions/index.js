import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dropdown } from "../../../../../components/Dropdown";
import styles from "./styles.module.scss";
import { Icon } from "../../../../../components/Icon";
export var Actions = function (_a) {
    var children = _a.children, renderTrigger = _a.renderTrigger, isFixed = _a.isFixed, onClick = _a.onClick;
    return (_jsx("div", { onClick: onClick, className: isFixed ? styles.isFixed : "", children: _jsxs(Dropdown.Container, { children: [_jsx(Dropdown.Trigger, { className: renderTrigger ? "" : styles.trigger, children: renderTrigger ? renderTrigger : _jsx(Icon, { name: "more" }) }), _jsx(Dropdown.Menu, { children: children })] }) }));
};
