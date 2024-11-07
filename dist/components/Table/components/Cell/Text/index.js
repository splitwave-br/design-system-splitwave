import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./styles.module.scss";
// TODO - Move it to a utils file and implement a visual feedback
function copyToClipboard(text) {
    navigator.clipboard
        .writeText(text)
        .then(function () {
        console.log("Texto copiado para o clipboard!");
    })
        .catch(function (err) {
        console.error("Erro ao copiar o texto: ", err);
    });
}
export var Text = function (_a) {
    var children = _a.children, isFixed = _a.isFixed, _b = _a.shouldTruncateText, shouldTruncateText = _b === void 0 ? false : _b, _c = _a.canCopy, canCopy = _c === void 0 ? false : _c, onCopy = _a.onCopy;
    var className = [
        styles.wrapper,
        isFixed ? styles.isFixed : "",
        shouldTruncateText ? styles.truncated : "",
    ].join(" ");
    var handleCopyContent = function (e) {
        if (canCopy) {
            e.stopPropagation();
            if (typeof children === "string") {
                copyToClipboard(children);
                onCopy === null || onCopy === void 0 ? void 0 : onCopy();
            }
        }
    };
    return (_jsx("div", { className: className, children: _jsxs("span", { className: canCopy ? styles.canCopy : "", onClick: handleCopyContent, children: [children, canCopy && _jsxs("span", { className: styles.copyLabel, children: [_jsx("span", { className: styles.threeDots, children: "..." }), " Copiar"] })] }) }));
};
