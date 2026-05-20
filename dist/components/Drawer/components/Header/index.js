'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './styles.module.scss';
import classnames from 'classnames';
import { Icon } from '../../../../components/Icon';
import { useDrawer } from '../../hooks/useDrawer';
var Header = function (_a) {
    var title = _a.title, onClose = _a.onClose, className = _a.className;
    var closeDrawer = useDrawer().closeDrawer;
    var handleClose = function () {
        closeDrawer();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    return (_jsxs("div", { className: classnames(styles.header, className), children: [_jsx("button", { className: styles.backBtn, onClick: handleClose, children: _jsx(Icon, { name: "back" }) }), _jsx("span", { className: styles.title, children: title }), _jsx("button", { className: styles.closeBtn, onClick: handleClose, children: _jsx(Icon, { size: "nano", name: "cancel" }) })] }));
};
export default Header;
