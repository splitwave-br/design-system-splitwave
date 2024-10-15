import { useEffect } from "react";

interface UseClickOutsideProps {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
  isActive: boolean;
}

const useClickOutside = ({ ref, callback, isActive }: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, ref, callback]);
};

export default useClickOutside;
