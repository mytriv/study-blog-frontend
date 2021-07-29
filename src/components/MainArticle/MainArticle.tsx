import styles from "./index.module.css"
import background from "../../assets/images/mainarticle.png"

const getDay = () => {
    let today = new Date()
    return today.getDate() + ' ' + (today.getMonth() + 1) + ' ' + today.getFullYear();

}

export const MainArticle = () => {
    return (
        <div style={{ backgroundImage:`url(${background})` }} className={styles.background}>
            <div className={styles.wrap}>
                <div>
                    <p className={styles.date}>{getDay()}</p>
                    <br/>
                </div>
                <h1 className={styles.title}>How anime affect on our life?</h1>
            </div>
        </div>
    );
}