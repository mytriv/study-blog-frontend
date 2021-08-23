import { articleService } from "../../api/articles/article.service";
import { Article } from "../../api/articles/models/article.model";

export const createArticleThunk = (data: Omit<Article, "id">) => {
  return async (dispatch: any) => {
    try {
      const create = await articleService.createMyArticle(data);
      alert("Article was created");
      window.location.href = `/articles/${create.data.id}/management`;
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
