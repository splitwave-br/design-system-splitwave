interface UseClickOutsideProps {
    ref: React.RefObject<HTMLElement>;
    callback: () => void;
    isActive: boolean;
}
declare const useClickOutside: ({ ref, callback, isActive }: UseClickOutsideProps) => void;
export default useClickOutside;
