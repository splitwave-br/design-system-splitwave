export type FloatingDirection = "Bottom" | "Top";
interface UseFloatingElementProps {
    triggerRef: React.RefObject<HTMLDivElement | null>;
    elementRef: React.RefObject<HTMLDivElement | null>;
    isEnabled: boolean;
    gap?: number;
}
export declare const useFloatingElement: ({ triggerRef, elementRef, isEnabled, gap, }: UseFloatingElementProps) => {
    animationDirection: FloatingDirection;
};
export {};
