var _a, _b;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "../../components/Icon";
import styles from "./styles.module.scss";
export var PresetEnum;
(function (PresetEnum) {
    PresetEnum["Error"] = "error";
    PresetEnum["Success"] = "success";
})(PresetEnum || (PresetEnum = {}));
var PresetTitles = (_a = {},
    _a[PresetEnum.Error] = "Erro",
    _a[PresetEnum.Success] = "Sucesso",
    _a);
var PresetIcons = (_b = {},
    _b[PresetEnum.Error] = "close",
    _b[PresetEnum.Success] = "check",
    _b);
export function Toast(_a) {
    var _title = _a.title, message = _a.message, _b = _a.timeout, timeout = _b === void 0 ? 0 : _b, onClose = _a.onClose, icon = _a.icon, preset = _a.preset;
    var _c = useState(false), hide = _c[0], setHide = _c[1];
    var _d = useState(true), visible = _d[0], setVisible = _d[1];
    useEffect(function () {
        var hideTimeout = setTimeout(function () {
            setHide(true);
        }, timeout);
        var closeTimeout = setTimeout(function () {
            setVisible(false);
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }, timeout + 300);
        return function () {
            clearTimeout(hideTimeout);
            clearTimeout(closeTimeout);
        };
    }, []);
    var title = useMemo(function () {
        if (_title)
            return _title;
        return preset && PresetTitles[preset];
    }, [_title, preset]);
    var iconName = useMemo(function () {
        if (icon)
            return icon;
        return preset && PresetIcons[preset];
    }, [icon, preset]);
    if (!visible)
        return null;
    var className = [
        styles.wrapper,
        hide && styles.hide,
        preset && styles[preset],
    ].join(" ");
    return (_jsxs("div", { className: className, children: [iconName && _jsx(Icon, { name: iconName, size: 2 }), _jsxs("div", { className: styles.content, children: [_jsx("span", { className: styles.title, children: title }), _jsx("span", { className: styles.message, children: message })] }), _jsx("div", { className: styles.progressWrapper, children: _jsx("div", { className: styles.progress, style: { "--toast-duration": "".concat(timeout, "ms") } }) })] }));
}
