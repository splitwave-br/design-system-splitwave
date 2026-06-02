import { ReactNode } from 'react';
export interface DrawerOptions {
    size?: 'sm' | 'md' | 'lg';
    closeOnOverlayClick?: boolean;
    onClose?: (...args: any) => void;
}
interface IDrawerContextData {
    openDrawer: (component: ReactNode, options?: DrawerOptions) => void;
    closeDrawer: (...args: any) => void;
    closeAll: (...args: any) => void;
}
export interface IDrawerEntry {
    id: string;
    component: ReactNode;
    options?: DrawerOptions;
    state: 'open' | 'closing';
}
declare function DrawerProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function useDrawer(): IDrawerContextData;
export { DrawerProvider, useDrawer };
