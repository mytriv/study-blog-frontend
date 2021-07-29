import {SmallLogo} from "../../components/SmallLogo";
import {Titles} from "./components/Titles";
import {Input} from "../../components/Input";
import styles from "./index.module.css"

export const ArticleManagementPage = () => {
    return (
        <div className={styles.page}>
            <SmallLogo logo={"Plane Blog"}/>
            <div className={styles.content}>
                <div className={styles.title}>
                    <Titles text={"Article title: "}/>
                </div>
                <div className={styles.input}>
                    <Input type={"text"} placeholder={"Please enter article title"} updateValue={function (){}}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <Titles text={"Article description: "}/>
                </div>
                <div className={styles.input}>
                    <Input type={"text"} placeholder={"Please enter article description"} updateValue={function (){}}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <Titles text={"Article image: "}/>
                </div>
                <div className={styles.input}>
                    <Input type={"url"} placeholder={"Please enter image url"} updateValue={function (){}}/>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.title}>
                    <Titles text={"Article text: "}/>
                </div>
                <div className={styles.input}>
                    <Input type={"text"} placeholder={"Write your article here"} updateValue={function (){}}/>
                </div>
            </div>
            
        </div>
    );
}