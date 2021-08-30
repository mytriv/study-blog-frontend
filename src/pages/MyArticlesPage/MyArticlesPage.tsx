import { CreateArticleButton } from "../../components/CreateButton";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { BlogTitle } from "../../components/BlogTitle";
import styles from "./index.module.css";
import { Button } from "../../components/Button";
import { useHistory } from "react-router";
import { useMyArticleLoad } from "./hooks/useMyArticlesLoad.hook";

export const MyArticlesPage = () => {
  const { articles } = useMyArticleLoad();
  const history = useHistory();

  const onCreateClick = () => {
    history.push("/articles/create");
  };
  const onManageClick = (id: number) => {
    history.push(`/articles/${id}/management`);
  };
  const onBackClick = () => {
    history.replace("/home");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.content}>
          <BlogTitle text={"My Articles"} />
          <div>
            {articles.map((article) => {
              return (
                  <div key={article.id} className={styles.preview}>
                    <div className={styles.title}>{article.title}</div>
                    <div className={styles.description}>{article.description}</div>
                    <div className={styles.button}>
                      <Button
                          title={"Manage >"}
                          onClick={() => {
                            onManageClick(article.id);
                          }}
                      />
                    </div>
                  </div>
              );
            })}
          </div>
          <div className={styles.button}>
            <CreateArticleButton
                onClick={onCreateClick}
                firstLine={"You have no articles yet"}
                secondLine={"Click here to create your one"}
                plus={<Plus />}
            />
          </div>
          <div className={styles.button}>
            <Button title={"Back"} onClick={onBackClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
