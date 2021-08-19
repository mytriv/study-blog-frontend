import styles from "./index.module.css";

type Props = {
  logo: string;
};

export const SmallLogo = ({ logo }: Props) => {
  return (
    <div>
      <h1 className={styles.logo}>{logo}</h1>
    </div>
  );
};
