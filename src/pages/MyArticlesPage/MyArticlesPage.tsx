import {CreateArticleButton} from "../../components/CreateButton";
import {ReactComponent as Plus} from "../../assets/icons/plus.svg";
import {BlogTitle} from "../../components/BlogTitle";
import styles from "./index.module.css"

export const MyArticlesPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <BlogTitle text={"My Articles"}/>
                <CreateArticleButton firstLine={"You have no articles yet"} secondLine={"Click here to create your one"} plus={<Plus/>}/>
            </div>
        </div>
    );
}