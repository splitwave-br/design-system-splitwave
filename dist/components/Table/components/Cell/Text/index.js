"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
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
const Text = ({ children, isFixed, shouldTruncateText = false, canCopy = false, onCopy, }) => {
    const className = [
        styles_module_scss_1.default.wrapper,
        isFixed ? styles_module_scss_1.default.isFixed : "",
        shouldTruncateText ? styles_module_scss_1.default.truncated : "",
    ].join(" ");
    const handleCopyContent = (e) => {
        if (canCopy) {
            e.stopPropagation();
            if (typeof children === "string") {
                copyToClipboard(children);
                onCopy?.();
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: className, children: (0, jsx_runtime_1.jsxs)("span", { className: canCopy ? styles_module_scss_1.default.canCopy : "", onClick: handleCopyContent, children: [children, canCopy && (0, jsx_runtime_1.jsxs)("span", { className: styles_module_scss_1.default.copyLabel, children: [(0, jsx_runtime_1.jsx)("span", { className: styles_module_scss_1.default.threeDots, children: "..." }), " Copiar"] })] }) }));
};
exports.Text = Text;
