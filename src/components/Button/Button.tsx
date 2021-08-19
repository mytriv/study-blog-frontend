import styles from "./index.module.css";

type Props = {
  title: string;
  onClick: () => void;
};

export const Button = ({ title, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {title}
    </button>
  );
};
