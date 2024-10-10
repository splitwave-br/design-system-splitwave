"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustHorizontalPosition = void 0;
const Container_1 = require("../../../components/Dropdown/Container");
const adjustHorizontalPosition = (datePickerRef, parentRef) => {
    if (datePickerRef.current && parentRef.current) {
        const datePicker = datePickerRef.current.getBoundingClientRect();
        const parent = parentRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const spaceToRight = windowWidth - parent.right;
        const spaceToLeft = parent.left;
        let newLeft = 0;
        // Verifica se deve abrir para a esquerda
        if (spaceToRight < datePicker.width && spaceToLeft > datePicker.width) {
            newLeft = -datePicker.width + parent.width;
        }
        // Verifica se está ultrapassando a borda direita
        const rightEdge = parent.left + newLeft + datePicker.width;
        if (rightEdge > windowWidth - Container_1.DEFAULT_PADDING) {
            newLeft = windowWidth - parent.left - datePicker.width - Container_1.DEFAULT_PADDING;
        }
        // Verifica se está ultrapassando a borda esquerda
        if (parent.left + newLeft < Container_1.DEFAULT_PADDING) {
            newLeft = Container_1.DEFAULT_PADDING - parent.left;
        }
        datePickerRef.current.style.left = `${newLeft}px`;
    }
};
exports.adjustHorizontalPosition = adjustHorizontalPosition;
