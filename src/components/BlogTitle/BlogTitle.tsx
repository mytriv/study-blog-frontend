import styles from "./index.module.css";

type Props = {
  text: string;
};

export const BlogTitle = ({ text }: Props) => {
  return (
    <div>
      <h2 className={styles.title}>{text}</h2>
    </div>
  );
};
