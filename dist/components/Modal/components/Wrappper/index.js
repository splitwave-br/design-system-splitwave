import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../../../../components/Icon";
import styles from "./styles.module.scss";
import { useModal } from "../../hooks/useModal";
import "./variables.scss";
import classnames from "classnames";
var Wrapper = function (_a) {
    var className = _a.className, children = _a.children, title = _a.title, onClose = _a.onClose;
    var closeModal = useModal().closeModal;
    var handleClose = function () {
        closeModal();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    return (_jsxs("div", { className: classnames(styles.wrapper, className), onClick: function (e) { return e.stopPropagation(); }, children: [title && (_jsxs("div", { className: styles.header, children: [onClose && (_jsx("button", { onClick: handleClose, className: styles.backBtn, children: _jsx(Icon, { name: "back" }) })), _jsx("span", { className: styles.title, children: title }), onClose && (_jsx("button", { onClick: handleClose, className: styles.closeBtn, children: _jsx(Icon, { size: "nano", name: "cancel" }) }))] })), children] }));
};
export default Wrapper;
