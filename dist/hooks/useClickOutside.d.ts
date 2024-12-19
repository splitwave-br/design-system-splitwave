interface UseClickOutsideProps {
    ref: React.RefObject<HTMLElement>;
    callback: () => void;
    isActive: boolean;
    exceptionRef?: React.RefObject<HTMLElement>;
}
declare const useClickOutside: ({ ref, callback, isActive, exceptionRef, }: UseClickOutsideProps) => void;
export default useClickOutside;
