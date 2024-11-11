type TContainer = {
    children: React.ReactNode;
    shouldEjectOnMobile?: boolean;
};
export declare const DEFAULT_PADDING = 16;
export declare const DEFAULT_GAP = 8;
type UsePositionElementProps = {
    relativeElement: React.RefObject<HTMLElement>;
    element: React.RefObject<HTMLElement>;
    isRendered: boolean;
};
export declare const usePositionElement: ({ relativeElement, element, isRendered, }: UsePositionElementProps) => void;
export declare const Container: {
    ({ children, shouldEjectOnMobile }: TContainer): import("react/jsx-runtime").JSX.Element | null;
    displayName: string;
};
export {};
