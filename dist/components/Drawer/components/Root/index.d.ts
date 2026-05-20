import React from 'react';
import '../../variables.scss';
export interface DrawerRootProps {
    children: React.ReactNode;
    className?: string;
}
declare const Root: ({ children, className }: DrawerRootProps) => import("react/jsx-runtime").JSX.Element;
export default Root;
