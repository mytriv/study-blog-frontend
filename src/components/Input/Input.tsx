import styles from "./index.module.css";
import {ReactElement} from "react";

type Props = {
    type: 'email' | 'password' | 'text';
    placeholder: string;
    header: string;
    value: string;
    updateValue: (str: string) => void;
    icon?: ReactElement;
    iconRev?: ReactElement;
}

export const Input = ({type, placeholder, icon, iconRev, header, value, updateValue}: Props) => {
    return (
        <div className={styles.wrapper}>
            <h4>{header}</h4>
            <div className={styles.inputWrapper}>
                {icon && <div className={styles.icon}>{ icon }</div>} {iconRev && <div className={styles.iconRev}>{ iconRev }</div>}
                <input value={value} onChange={(event) => {updateValue(event.target.value)}} className={styles.input} type={type} placeholder={placeholder} />
            </div>
        </div>
    );
}
