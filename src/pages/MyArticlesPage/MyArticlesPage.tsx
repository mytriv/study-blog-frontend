import {CreateArticleButton} from "../../components/CreateButton";
import {ReactComponent as Plus} from "../../assets/icons/plus.svg";
import {BlogTitle} from "../../components/BlogTitle";
import styles from "./index.module.css"
import {Button} from "../../components/Button";
import {useHistory} from "react-router";
import {useMyArticleLoad} from "./hooks/useMyArticlesLoad.hook";

export const MyArticlesPage = () => {

    const {articles} = useMyArticleLoad()
    const history = useHistory();

    const onCreateClick = () => {
        history.push("/articles/create")
    }
    const onManageClick = (id: number) => {
        history.push(`/articles/${id}/management`)
    }
    const onBackClick = () => {
        history.replace("/home");
    }

    return (
            <div className={styles.page}>

                <div className={styles.content}>
                    <BlogTitle
                        text={"My Articles"}/>
                    {
                        articles.map(article => {
                            return (
                                <div>
                                    <div>{article.title}</div>
                                    <div>{article.description}</div>
                                    <Button title={"Manage >"} onClick={() => {onManageClick(article.id)}}/>
                                </div>
                            );
                        })
                    }

                    <CreateArticleButton
                        onClick={onCreateClick}
                        firstLine={"You have no articles yet"}
                        secondLine={"Click here to create your one"}
                        plus={<Plus/>} />
                </div>

            <Button title={"Back"}
                    onClick={onBackClick}/>
        </div>
    );
}