interface TriggerProps {
    path: string;
    children: React.ReactNode;
    isDisabled?: boolean;
    currentPath?: string;
}
declare const Trigger: ({ path, children, isDisabled, currentPath, }: TriggerProps) => import("react/jsx-runtime").JSX.Element;
export default Trigger;
