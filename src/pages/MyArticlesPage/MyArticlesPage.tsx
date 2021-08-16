import {CreateArticleButton} from "../../components/CreateButton";
import {ReactComponent as Plus} from "../../assets/icons/plus.svg";
import {BlogTitle} from "../../components/BlogTitle";
import styles from "./index.module.css"
import {Button} from "../../components/Button";
import {useHistory} from "react-router";

export const MyArticlesPage = () => {

    const history = useHistory();

    const onManageClick = () => {
        history.push("/management")
    }
    const onBackClick = () => {
        history.replace("/home");
    }

    return (
        <div>
            <div>
                <Button title={"Manage >"} onClick={onManageClick}/>
            </div>

            <div className={styles.page}>
                <div className={styles.content}>
                    <BlogTitle
                        text={"My Articles"}/>

                    <CreateArticleButton
                        onClick={onManageClick}
                        firstLine={"You have no articles yet"}
                        secondLine={"Click here to create your one"}
                        plus={<Plus/>} />
                </div>
            </div>
            <Button title={"Back"}
                    onClick={onBackClick}/>
        </div>
    );
}