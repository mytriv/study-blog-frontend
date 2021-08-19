import styles from "./index.module.css";
type Props = {
  text: string;
};

export const Titles = ({ text }: Props) => {
  return (
    <div>
      <h2 className={styles.font}>{text}</h2>
    </div>
  );
};
