type EqualityFn<T> = (a: T, b: T) => boolean;
type UseDebounceValueOptions<T> = {
    delay?: number;
    equalityFn?: EqualityFn<T>;
};
export declare function useDebounceValue<T>(value: T, { delay, equalityFn }?: UseDebounceValueOptions<T>): T;
export {};
