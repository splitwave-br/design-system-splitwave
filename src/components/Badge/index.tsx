import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';
import variants from './variants.module.scss';
import sizes from './sizes.module.scss';

export type TVariant =
  | 'purple'
  | 'gray'
  | 'dark-gray'
  | 'blue-light'
  | 'error'
  | 'blue'
  | 'orange'
  | 'warning'
  | 'indigo'
  | 'success';

export type TSizes = 'sm' | 'md' | 'lg';

export type TBadge = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: TVariant;
  size?: TSizes;
  disabled?: boolean;
  className?: string;
};

export function Badge({
  children,
  variant = 'gray',
  size = 'sm',
  disabled,
  className,
  ...props
}: TBadge) {
  return (
    <button
      disabled={disabled}
      className={[
        styles.button,
        size ? sizes[size] : '',
        variant ? variants[variant] : '',
        className ? className : '',
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
