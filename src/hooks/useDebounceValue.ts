import { useEffect, useRef, useState } from "react";

type EqualityFn<T> = (a: T, b: T) => boolean;

type UseDebounceValueOptions<T> = {
  delay?: number;
  equalityFn?: EqualityFn<T>;
};

export function useDebounceValue<T>(
  value: T,
  { delay = 300, equalityFn }: UseDebounceValueOptions<T> = {},
): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const previousValueRef = useRef(value);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const areEqual = equalityFn ?? ((a: T, b: T) => a === b);

  useEffect(() => {
    if (areEqual(previousValueRef.current, value)) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
      previousValueRef.current = value;
    }, delay);

    return () => clearTimeout(timeoutRef.current);
  }, [value, delay, areEqual]);

  return debouncedValue;
}
