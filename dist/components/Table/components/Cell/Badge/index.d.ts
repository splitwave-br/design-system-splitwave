import { TCell } from '../../../../../components/Table/types';
import { TBadge } from '../../../../../components/Badge';
type TProps = TCell & TBadge & {
    children: string;
};
export declare const Badge: ({ children, ...props }: TProps) => import("react/jsx-runtime").JSX.Element;
export {};
