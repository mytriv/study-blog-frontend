import styles from "./index.module.css";
type Props = {
  text: string;
};

export const Titles = ({ text }: Props) => {
  return <h2 className={styles.font}>{text}</h2>;
};
