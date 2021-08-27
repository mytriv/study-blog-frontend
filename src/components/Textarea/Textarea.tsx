import styles from "./index.module.css"

type Props = {
  name: string;
  id: string;
  cols?: number;
  rows?: number;
  placeholder: string;
  value: string;
  updateValue: (str: string) => void;
};

export const Textarea = ({
  name,
  id,
  cols,
  rows,
  placeholder,
  updateValue,
  value,
}: Props) => {
  return (
    <div className={styles.textarea}>
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          updateValue(event.target.value);
        }}
      ></textarea>
    </div>
  );
};
