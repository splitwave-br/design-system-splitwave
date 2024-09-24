"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatStyles = concatStyles;
function concatStyles(styles) {
    return styles.join(" ").replace(/\s+/, " ").trim();
}
