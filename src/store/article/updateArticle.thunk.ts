import { articleService } from "../../api/articles/article.service";
import { Article } from "../../api/articles/models/article.model";

export const updateArticleThunk = (data: Article) => {
  return async (dispatch: any) => {
    try {
      const update = await articleService.updateMyArticle(data);
      alert("Article was updated");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
};
