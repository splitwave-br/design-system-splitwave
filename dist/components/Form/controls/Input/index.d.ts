import { TIcons } from "../../../../components/Icon";
import "./variables.scss";
import { ForwardedRef } from "react";
export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    prefix?: TIcons;
    suffix?: TIcons;
    textPrefix?: string;
    textSuffix?: string;
    hasError?: boolean;
    wrapperStyles?: string;
}
export declare const InputWithRef: ({ textPrefix, textSuffix, prefix, suffix, hasError, onFocus, onBlur, wrapperStyles, ...props }: IInput, ref: ForwardedRef<HTMLInputElement>) => import("react/jsx-runtime").JSX.Element;
export declare const Input: import("react").ForwardRefExoticComponent<IInput & import("react").RefAttributes<HTMLInputElement>>;
