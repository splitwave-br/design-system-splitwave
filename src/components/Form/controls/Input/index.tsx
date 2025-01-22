"use client";
import { Icon, TIcons } from "@/components/Icon";
import styles from "./styles.module.scss";
import "./variables.scss";
import { ForwardedRef, forwardRef, useState } from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: TIcons;
  suffix?: TIcons;
  textPrefix?: string;
  textSuffix?: string;
  hasError?: boolean;
  wrapperStyles?: string;
}

export const InputWithRef = (
  {
    textPrefix,
    textSuffix,
    prefix,
    suffix,
    hasError,
    onFocus,
    onBlur,
    wrapperStyles,
    ...props
  }: IInput,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(e);
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
    setIsFocused(false);
  };

  const className = [
    props.className,
    styles.input,
    props.disabled ? styles.disabled : "",
    prefix ? styles.prefix : "",
    suffix ? styles.suffix : "",
    textSuffix ? styles.textSuffix : "",
    textPrefix ? styles.textPrefix : "",
  ].join(" ");

  const wrapperClassName = [
    styles.wrapper,
    textSuffix ? styles.hasTextSufix : "",
    textPrefix ? styles.hasTextPrefix : "",
    isFocused && (textPrefix || textSuffix) ? styles.isFocused : "",
    props.disabled && (textPrefix || textSuffix) ? styles.isDisabled : "",
    hasError ? styles.error : "",
    wrapperStyles,
  ].join(" ");

  return (
    <div className={wrapperClassName}>
      {textPrefix && <span className={styles.text__prefix}>{textPrefix}</span>}
      {prefix && <Icon name={prefix} size={"micro"} />}
      <input
        ref={ref}
        {...props}
        type={props.type}
        placeholder={props.placeholder || "Digite"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={className}
      />
      {suffix && <Icon name={suffix} size={"micro"} />}
      {textSuffix && <span className={styles.text__sufix}>{textSuffix}</span>}
    </div>
  );
};

export const Input = forwardRef(InputWithRef);
