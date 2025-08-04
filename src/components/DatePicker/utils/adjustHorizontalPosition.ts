import { RefObject } from 'react';

type TElementRef = RefObject<HTMLDivElement>;
export const DEFAULT_PADDING = 16;

export const adjustHorizontalPosition = (
  datePickerRef: TElementRef,
  parentRef: TElementRef
) => {
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
    if (rightEdge > windowWidth - DEFAULT_PADDING) {
      newLeft = windowWidth - parent.left - datePicker.width - DEFAULT_PADDING;
    }

    // Verifica se está ultrapassando a borda esquerda
    if (parent.left + newLeft < DEFAULT_PADDING) {
      newLeft = DEFAULT_PADDING - parent.left;
    }

    datePickerRef.current.style.left = `${newLeft}px`;
  }
};
