import styles from "./index.module.css";

type Props = {
  title: string;
  text?: string;
  linkText?: "Signup" | "Login";
  link?: string;
};

export const AuthHeader = ({ title, text, linkText, link }: Props) => {
  return (
    <div>
      <h2 className={styles.loginHeader}>{title}</h2>
      <h3 className={styles.loginText}>
        {text}
        <a href={link}>{linkText}</a>
      </h3>
    </div>
  );
};
