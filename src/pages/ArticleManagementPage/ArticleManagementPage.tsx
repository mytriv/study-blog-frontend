import { SmallLogo } from "../../components/SmallLogo";
import { Titles } from "./components/Titles";
import { Input } from "../../components/Input";
import styles from "./index.module.css";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useArticleManageLoad } from "./hooks/useArticleManageLoad.hook";

export const ArticleManagementPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [mainImageUrl, setMainImageUrl] = useState("");

  const { article } = useArticleManageLoad();

  useEffect(() => {
    if (!article) {
      return;
    }
    setTitle(article.title);
    setDescription(article.description);
    setContent(article.content);
    setMainImageUrl(article.mainImageUrl);
  }, [article]);

  const history = useHistory();

  const onSaveClick = async () => {
    try {
      await axios.post("/api/v1/articles", {
        title,
        description,
        content,
        mainImageUrl,
      });
      history.push("/myarticles");
    } catch (error) {
      console.log("error: ", error.response.data);
    }
  };

  const onBackClick = () => {
    history.replace("/myarticles");
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <SmallLogo logo={"Plane Blog"} />
        <div>
          <div className={styles.content}>
            <div className={styles.title}>
              <Titles text={"Article title: "} />
            </div>
            <div className={styles.input}>
              <Input
                type={"text"}
                placeholder={"Please enter article title"}
                value={title}
                updateValue={setTitle}
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <Titles text={"Article description: "} />
            </div>
            <div className={styles.input}>
              <Input
                type={"text"}
                placeholder={"Please enter article description"}
                value={description}
                updateValue={setDescription}
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <Titles text={"Article image: "} />
            </div>
            <div className={styles.input}>
              <Input
                type={"text"}
                placeholder={"Please enter image url"}
                value={mainImageUrl}
                updateValue={setMainImageUrl}
              />
            </div>
          </div>

          <div className={styles.contentCreateArticle}>
            <div className={styles.title}>
              <Titles text={"Article text: "} />
            </div>
            <div className={styles.inputTextArea}>
              <textarea
                onChange={(event) => {
                  setContent(event.target.value);
                }}
                value={content}
                name="Article Text"
                id="Article"
                placeholder={"Enter your text"}
              />
            </div>
          </div>
          <div className={styles.buttonBlock}>
            <div className={styles.buttonSave}>
              <Button title={"Save"} onClick={onSaveClick} />
            </div>
            <div className={styles.buttonBack}>
              <Button title={"Back"} onClick={onBackClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
