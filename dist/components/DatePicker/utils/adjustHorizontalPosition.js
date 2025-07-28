export var DEFAULT_PADDING = 16;
export var adjustHorizontalPosition = function (datePickerRef, parentRef) {
    if (datePickerRef.current && parentRef.current) {
        var datePicker = datePickerRef.current.getBoundingClientRect();
        var parent_1 = parentRef.current.getBoundingClientRect();
        var windowWidth = window.innerWidth;
        var spaceToRight = windowWidth - parent_1.right;
        var spaceToLeft = parent_1.left;
        var newLeft = 0;
        // Verifica se deve abrir para a esquerda
        if (spaceToRight < datePicker.width && spaceToLeft > datePicker.width) {
            newLeft = -datePicker.width + parent_1.width;
        }
        // Verifica se está ultrapassando a borda direita
        var rightEdge = parent_1.left + newLeft + datePicker.width;
        if (rightEdge > windowWidth - DEFAULT_PADDING) {
            newLeft = windowWidth - parent_1.left - datePicker.width - DEFAULT_PADDING;
        }
        // Verifica se está ultrapassando a borda esquerda
        if (parent_1.left + newLeft < DEFAULT_PADDING) {
            newLeft = DEFAULT_PADDING - parent_1.left;
        }
        datePickerRef.current.style.left = "".concat(newLeft, "px");
    }
};
