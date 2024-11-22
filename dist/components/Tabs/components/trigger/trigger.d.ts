interface TriggerProps {
    path: string;
    children: React.ReactNode;
    isDisabled?: boolean;
    currentPath?: string;
    relatedPath?: string;
}
declare const Trigger: ({ path, children, isDisabled, currentPath, relatedPath, }: TriggerProps) => import("react/jsx-runtime").JSX.Element;
export default Trigger;
