import { SmallLogo } from "../../components/SmallLogo";
import { Titles } from "./components/Titles";
import { Input } from "../../components/Input";
import styles from "./index.module.css";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useArticleManageLoad } from "./hooks/useArticleManageLoad.hook";
import { useDispatch } from "react-redux";
import { createArticleThunk } from "../../store/article/createArticle.thunk";
import { updateArticleThunk } from "../../store/article/updateArticle.thunk";
import { articleSlice } from "../../store/article/articleSlice";
import { Textarea } from "../../components/Textarea";

export const ArticleManagementPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [mainImageUrl, setMainImageUrl] = useState("");

  const { article } = useArticleManageLoad();
  const { articleId } = useParams<{ articleId: string }>();
  const dispatch = useDispatch();

  const isCreationPage = !articleId;
  const isImage = mainImageUrl.match(/.(jpg|jpeg|png|gif)$/i);
  const isEmpty = (check: string) => {
    return !check.trim().length;
  };

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
      <div className={styles.container}>
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
                <div className={styles.count}>{`Chars left: ${
                  140 - title.length
                }`}</div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <Titles text={"Article description: "} />
              </div>
              <div className={styles.textAreaDescription}>
                <Textarea
                  name={"Description"}
                  id={"Description"}
                  placeholder={"Enter your description"}
                  value={description}
                  updateValue={setDescription}
                  rows={10}
                />
                <div className={styles.count}>{`Chars left: ${
                  300 - description.length
                }`}</div>
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
                  {isImage ? (
                    <img
                      className={styles.img}
                      src={mainImageUrl}
                      alt="Article image"
                    />
                  ) : isEmpty(mainImageUrl) ? (
                    <div></div>
                  ) : (
                    <div className={styles.content}>
                      <p>Please enter a valid image url.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.contentCreateArticle}>
              <div className={styles.title}>
                <Titles text={"Article text: "} />
              </div>
              <div className={styles.textAreaContent}>
                <Textarea
                  name={"Article"}
                  id={"Article"}
                  placeholder={"Enter your text"}
                  value={content}
                  updateValue={setContent}
                  rows={40}
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
    </div>
  );
};
