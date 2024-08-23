import styles from "./styles.module.scss";

type OverlayProps = {
  children: React.ReactNode;
}

const Footer = ({ children }: OverlayProps) => {
  return <div className={styles.footer}>{children}</div>;
};

export default Footer;
