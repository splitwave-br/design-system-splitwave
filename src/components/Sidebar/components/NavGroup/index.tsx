import styles from "./styles.module.scss";
import itemStyles from "../NavItem/styles.module.scss";
import '../NavItem/variables.scss'
import classnames from "classnames";
import { useAnimatedStyles } from "./hooks/useAnimatedStyles";
import { Route } from "../types/route";
import { NavItem } from "../NavItem";
import { Icon } from "@/components/Icon";

export interface NavGroupProps<T = {}> {
  route: Route<T>;
  isOpened?: boolean;
  onClick?: () => void;
  onClickItem?: () => void;
  disabled?: boolean;
  getIsRouteActive: (routePath: Route["path"]) => boolean;
  getShouldShowRoute?: (route: Route<T>) => boolean
}

export const NavGroup = <T,>({
  route,
  isOpened,
  disabled,
  onClickItem,
  onClick,
  getIsRouteActive,
  getShouldShowRoute,
}: NavGroupProps<T>) => {
  const { animatedStyles } = useAnimatedStyles({
    routes: route.children,
    isOpened,
  });

  const isGroupActive = () =>
    route?.children?.some((child: any) => getIsRouteActive(child.path));

  return (
    <div className={styles.wrapper}>
      <div
        onClick={onClick}
        className={classnames(itemStyles.wrapper, {
          [itemStyles.active]: isGroupActive,
          [itemStyles.disabled]: disabled
        })}
      >
        <div className={styles.routeWrapper}>
        {route?.icon ? (
          <Icon name={route?.icon} size={1} className={itemStyles.icon} />
        ) : null}
       {route.name}
        </div>
        <Icon name="chevron-down" size={1} className={styles.iconDropdown} />
      </div>
      <div
        className={classnames(styles.wrapperItems, {
          [styles.wrapperItems__opened]: isOpened,
        })}
        style={animatedStyles}
      >
        {route?.children?.map((route) => {
          const isActive = getIsRouteActive(route.path);
          const canShow = !route.shouldHide && getShouldShowRoute ? getShouldShowRoute(route) : true 

          if (!canShow) return false;

          return (
            <NavItem
              key={route.name}
              isActive={isActive}
              route={route}
              onClick={onClickItem}
            />
          );
        })}
      </div>
    </div>
  );
};
