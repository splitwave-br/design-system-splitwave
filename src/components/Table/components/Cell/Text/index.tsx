import { TCell } from "@/components/Table/types";
import styles from "./styles.module.scss";

type TProps = TCell & {
  children: React.ReactNode;
  isFixed?: boolean;
  shouldTruncateText?: boolean;
  canCopy?: boolean;
};

// TODO - Move it to a utils file and implement a visual feedback
function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      console.log("Texto copiado para o clipboard!");
    })
    .catch(function (err) {
      console.error("Erro ao copiar o texto: ", err);
    });
}

export const Text = ({
  children,
  isFixed,
  shouldTruncateText = false,
  canCopy = false,
}: TProps) => {
  const className = [
    styles.wrapper,
    isFixed ? styles.isFixed : "",
    shouldTruncateText ? styles.truncated : "",
  ].join(" ");

  const handleCopyContent = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (canCopy) {
      e.stopPropagation();
      if (typeof children === "string") copyToClipboard(children);
    }
  };

  return (
    <div className={className}>
      <span
        className={canCopy ? styles.canCopy : ""}
        onClick={handleCopyContent}
      >
        {children}
        {canCopy && <span className={styles.copyLabel}>... Copiar</span>}
      </span>
    </div>
  );
};
