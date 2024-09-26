import { ForwardedRef } from "react";
export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    textPrefix?: string;
    textSuffix?: string;
    hasError?: boolean;
    wrapperStyles?: string;
}
export declare const InputWithRef: ({ textPrefix, textSuffix, hasError, onFocus, onBlur, wrapperStyles, ...props }: IInput, ref: ForwardedRef<HTMLInputElement>) => import("react/jsx-runtime").JSX.Element;
export declare const Input: import("react").ForwardRefExoticComponent<IInput & import("react").RefAttributes<HTMLInputElement>>;
