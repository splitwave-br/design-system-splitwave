import React from "react";
type TContainer = {
    children: React.ReactNode;
    shouldEjectOnMobile?: boolean;
    shouldPortal?: boolean;
};
export declare const DEFAULT_PADDING = 16;
export declare const DEFAULT_GAP = 8;
type UsePositionElementProps = {
    relativeElement: React.RefObject<HTMLElement>;
    element: React.RefObject<HTMLElement>;
    containerElement: HTMLElement;
    isRendered: boolean;
    shouldPortal?: boolean;
};
export declare const usePositionElement: ({ relativeElement, element, containerElement, isRendered, shouldPortal, }: UsePositionElementProps) => void;
export declare const Container: {
    ({ children, shouldEjectOnMobile, shouldPortal, }: TContainer): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
export {};
