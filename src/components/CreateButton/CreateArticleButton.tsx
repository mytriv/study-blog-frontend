import styles from "./index.module.css";
import { ReactElement } from "react";

type Props = {
  firstLine: string;
  secondLine: string;
  plus: ReactElement;
  onClick: () => void;
};

export const CreateArticleButton = ({
  firstLine,
  secondLine,
  plus,
  onClick,
}: Props) => {
  return (
      <button onClick={onClick} className={styles.wrapper}>
        <p className={styles.firstLine}>{firstLine}</p>
        {plus && <div className={styles.plus}>{plus}</div>}
        <p className={styles.secondLine}>{secondLine}</p>
      </button>
  );
};
