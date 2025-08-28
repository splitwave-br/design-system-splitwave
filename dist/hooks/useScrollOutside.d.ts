interface UseScrollOutsideProps {
    isActive: boolean;
    containerRef: React.RefObject<HTMLElement>;
    exceptionRef?: React.RefObject<HTMLElement>;
    onTrigger: () => void;
}
export declare const useScrollOutside: ({ isActive, containerRef, exceptionRef, onTrigger, }: UseScrollOutsideProps) => void;
export {};
