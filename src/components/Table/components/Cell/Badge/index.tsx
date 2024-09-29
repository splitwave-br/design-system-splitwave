import { TCell } from '@/components/Table/types';
import { Badge as BadgeComponent, TBadge } from '@/components/Badge';

type TProps = TCell &
  TBadge & {
    children: string;
  };

export const Badge = ({ children, ...props }: TProps) => {
  return (
    <div>
      <BadgeComponent {...props}>{children}</BadgeComponent>
    </div>
  );
};
