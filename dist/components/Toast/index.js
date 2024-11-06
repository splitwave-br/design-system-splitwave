import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
import { Icon } from "../../components/Icon";
import { useEffect, useMemo, useState } from "react";
export function Toast(_a) {
    var _title = _a.title, message = _a.message, _b = _a.timeout, timeout = _b === void 0 ? 0 : _b, onClose = _a.onClose, icon = _a.icon, error = _a.error, success = _a.success;
    var _c = useState(false), hide = _c[0], setHide = _c[1];
    var _d = useState(false), visible = _d[0], setVisible = _d[1];
    useEffect(function () {
        setVisible(true);
        var hideTimeout = setTimeout(function () {
            setHide(true);
        }, timeout);
        var closeTimeout = setTimeout(function () {
            onClose === null || onClose === void 0 ? void 0 : onClose();
            setVisible(false);
        }, timeout + 300);
        return function () {
            clearTimeout(hideTimeout);
            clearTimeout(closeTimeout);
        };
    }, []);
    var title = useMemo(function () {
        if (_title)
            return _title;
        if (error)
            return "Erro";
        if (success)
            return "Sucesso";
    }, [_title, success, error]);
    var iconName = useMemo(function () {
        if (error)
            return "close";
        if (success)
            return "check";
        return icon;
    }, [icon, error, success]);
    if (!visible)
        return null;
    var className = [
        styles.wrapper,
        hide && styles.hide,
        error && styles.error,
        success && styles.success,
    ].join(" ");
    //
    return (_jsxs("div", { className: className, children: [iconName && _jsx(Icon, { name: iconName, size: 2 }), _jsxs("div", { className: styles.content, children: [_jsx("span", { className: styles.title, children: title }), _jsx("span", { className: styles.message, children: message })] }), _jsx("div", { className: styles.progressWrapper, children: _jsx("div", { className: styles.progress, style: { "--toast-duration": "".concat(timeout, "ms") } }) })] }));
}
