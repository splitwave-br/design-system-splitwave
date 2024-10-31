import { PropsWithChildren } from 'react';
import { UseFormReturn } from 'react-hook-form';
type ContainerProps<FieldValues extends {}> = PropsWithChildren & {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    registerForm: UseFormReturn<FieldValues>;
    className?: string;
};
export declare const Container: <FieldValues extends {}>({ children, onSubmit, registerForm, ...props }: ContainerProps<FieldValues>) => import("react/jsx-runtime").JSX.Element;
export {};
