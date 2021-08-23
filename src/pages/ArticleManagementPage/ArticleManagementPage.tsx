import { SmallLogo } from "../../components/SmallLogo";
import { Titles } from "./components/Titles";
import { Input } from "../../components/Input";
import styles from "./index.module.css";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { useArticleManageLoad } from "./hooks/useArticleManageLoad.hook";
import { useDispatch } from "react-redux";
import { createArticleThunk } from "../../store/article/createArticle.thunk";
import { updateArticleThunk } from "../../store/article/updateArticle.thunk";
import { articleSlice } from "../../store/article/articleSlice";

export const ArticleManagementPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [mainImageUrl, setMainImageUrl] = useState("");

  const { article } = useArticleManageLoad();
  const { articleId } = useParams<{ articleId: string }>();
  const dispatch = useDispatch();

  const isCreationPage = !articleId;

  useEffect(() => {
    return () => {
      // @ts-ignore
      dispatch(articleSlice.actions.clearArticle());
    };
  }, []);

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
    dispatch(createArticleThunk({ title, description, content, mainImageUrl }));
  };

  const onUpdateClick = async () => {
    dispatch(
      updateArticleThunk({
        title,
        description,
        content,
        mainImageUrl,
        id: +articleId,
      })
    );
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
              <div>
                <img className={styles.img} src={mainImageUrl} alt="" />
              </div>
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
              {isCreationPage ? (
                <Button title={"Save"} onClick={onSaveClick} />
              ) : (
                <Button title={"Update"} onClick={onUpdateClick} />
              )}
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
