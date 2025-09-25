import { Route } from '../types/route'
import { Icon } from '@/components/Icon'
import styles from './styles.module.scss'
import classnames from 'classnames'
import './variables.scss'

interface WrapperProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export interface NavItemProps {
  route: Route
  isActive?: boolean
  onClick?: () => void
  disabled?: boolean
  renderWrapper?: (
    props: WrapperProps
  ) => JSX.Element
}

export const NavItem = ({
  route,
  isActive,
  onClick,
  disabled,
  renderWrapper,
}: NavItemProps) => {
  const className = classnames(styles.wrapper, {
    [styles.active]: isActive,
    [styles.noIcon]: !route.icon,
    [styles.disabled]: disabled,
  })

  const props: WrapperProps = {
    href: disabled ? '#' : route.path,
    className,
    onClick,
    children: (
      <>
        {route.icon ? (
          <Icon name={route.icon} size={1} className={styles.icon} />
        ) : (
          <div className={styles.dot} />
        )}
        {route.name}
      </>
    ),
  }

  if (renderWrapper) {
    return renderWrapper(props)
  }

  return <a {...props} />
}
