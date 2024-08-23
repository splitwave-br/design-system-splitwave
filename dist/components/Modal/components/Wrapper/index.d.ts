type OverlayProps = {
    children: React.ReactNode;
    title?: string;
    onClose?: (...args: any) => void;
};
declare const Wrapper: ({ children, title, onClose }: OverlayProps) => import("react/jsx-runtime").JSX.Element;
export default Wrapper;
