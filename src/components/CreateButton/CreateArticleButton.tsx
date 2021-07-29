import styles from "./index.module.css"
import {ReactElement} from "react";

type Props = {
    firstLine: string;
    secondLine: string;
    plus: ReactElement;
}

export const CreateArticleButton = ({firstLine, secondLine, plus} : Props) => {
    return (
        <div  className={styles.button} >
            <button className={styles.wrapper}>
                <p className={styles.firstLine}>{firstLine}</p>
                {plus && <div className={styles.plus}>{ plus }</div>}
                <p className={styles.secondLine}>{secondLine}</p>
            </button>
        </div>
    );
}