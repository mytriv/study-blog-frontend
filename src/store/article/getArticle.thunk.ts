import { articleService } from "../../api/articles/article.service";
import { articleSlice } from "./articleSlice";

export const getArticleThunk = (id: number) => {
  return async (dispatch: any) => {
    const response = await articleService.getMyArticle(id);
    dispatch(articleSlice.actions.getArticle(response.data));
  };
};
