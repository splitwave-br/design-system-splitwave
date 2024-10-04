type TContentProps = {
    children: React.ReactNode;
    className?: string;
    onClose?: () => void;
    hasClear?: boolean;
    spacing?: "default" | "sm";
};
export declare const Content: import("react").ForwardRefExoticComponent<TContentProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
