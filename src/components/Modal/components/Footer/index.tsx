import styles from "./styles.module.scss";

interface OverlayProps {
  children: React.ReactNode;
}

const Footer = ({ children }: OverlayProps) => {
  return <div className={styles.footer}>{children}</div>;
};

export default Footer;
